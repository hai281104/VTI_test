package com.voucher_management.vouchermanagement.application.service;

import com.voucher_management.vouchermanagement.application.dto.request.VoucherRequest;
import com.voucher_management.vouchermanagement.domain.entity.Voucher;
import com.voucher_management.vouchermanagement.domain.repository.VoucherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherService {

    private final VoucherRepository voucherRepository;

    public Voucher create(VoucherRequest request) {
        if (voucherRepository.existsByCode(request.getCode())) {
            throw new RuntimeException("Code voucher đã tồn tại");
        }

        Voucher voucher = Voucher.builder()
                .code(request.getCode())
                .discountPercent(request.getDiscountPercent())
                .quantity(request.getQuantity())
                .expiredDate(request.getExpiredDate())
                .status(request.getStatus() != null ? request.getStatus() : "ACTIVE")
                .createdAt(LocalDateTime.now())
                .build();

        return voucherRepository.save(voucher);
    }

    public Voucher update(Long id, VoucherRequest request) {
        Voucher existing = voucherRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy voucher"));

        if (!existing.getCode().equals(request.getCode()) && voucherRepository.existsByCode(request.getCode())) {
            throw new RuntimeException("Code voucher đã tồn tại");
        }

        existing.setCode(request.getCode());
        existing.setDiscountPercent(request.getDiscountPercent());
        existing.setQuantity(request.getQuantity());
        existing.setExpiredDate(request.getExpiredDate());
        if (request.getStatus() != null) {
            existing.setStatus(request.getStatus());
        }

        return voucherRepository.save(existing);
    }

    public void delete(Long id) {
        if (voucherRepository.findById(id).isEmpty()) {
            throw new RuntimeException("Không tìm thấy voucher");
        }
        voucherRepository.deleteById(id);
    }

    public List<Voucher> getAll() {
        return voucherRepository.findAll();
    }

    public List<Voucher> search(String code) {
        return voucherRepository.searchByCode(code);
    }
}