package com.voucher_management.vouchermanagement.application.service;

import com.voucher_management.vouchermanagement.application.dto.request.VoucherUsageRequest;
import com.voucher_management.vouchermanagement.domain.entity.User;
import com.voucher_management.vouchermanagement.domain.entity.Voucher;
import com.voucher_management.vouchermanagement.domain.entity.VoucherUsage;
import com.voucher_management.vouchermanagement.domain.repository.UserRepository;
import com.voucher_management.vouchermanagement.domain.repository.VoucherRepository;
import com.voucher_management.vouchermanagement.domain.repository.VoucherUsageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherUsageService {

    private final VoucherUsageRepository voucherUsageRepository;
    private final VoucherRepository voucherRepository;
    private final UserRepository userRepository;

    @Transactional // Đảm bảo tính toàn vẹn dữ liệu: Lỗi ở đâu, rollback toàn bộ
    public VoucherUsage useVoucher(VoucherUsageRequest request) {
        // 1. Kiểm tra User có tồn tại không
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("Người dùng không tồn tại trên hệ thống"));

        // 2. Kiểm tra Voucher có tồn tại không
        Voucher voucher = voucherRepository.findById(request.getVoucherId())
                .orElseThrow(() -> new RuntimeException("Voucher không tồn tại"));

        // 3. Thực hiện các Validate theo yêu cầu đề bài
        if (!"ACTIVE".equalsIgnoreCase(voucher.getStatus())) {
            throw new RuntimeException("Voucher đang ở trạng thái INACTIVE");
        }
        if (voucher.getExpiredDate().isBefore(LocalDate.now())) {
            throw new RuntimeException("Voucher đã hết hạn sử dụng");
        }
        if (voucher.getQuantity() <= 0) {
            throw new RuntimeException("Voucher đã hết số lượng");
        }

        // 4. Giảm số lượng voucher đi 1 và cập nhật vào DB
        voucher.setQuantity(voucher.getQuantity() - 1);
        voucherRepository.save(voucher);

        // 5. Lưu lịch sử sử dụng
        VoucherUsage usage = VoucherUsage.builder()
                .userId(user.getId())
                .voucherId(voucher.getId())
                .usedAt(LocalDateTime.now())
                .build();

        return voucherUsageRepository.save(usage);
    }

    public List<VoucherUsage> getUsageHistory() {
        return voucherUsageRepository.findAll();
    }
}