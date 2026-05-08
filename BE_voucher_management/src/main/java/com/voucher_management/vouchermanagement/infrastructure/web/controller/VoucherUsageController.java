package com.voucher_management.vouchermanagement.infrastructure.web.controller;

import com.voucher_management.vouchermanagement.application.dto.request.VoucherUsageRequest;
import com.voucher_management.vouchermanagement.application.dto.response.ApiResponse;
import com.voucher_management.vouchermanagement.application.service.VoucherUsageService;
import com.voucher_management.vouchermanagement.domain.entity.VoucherUsage;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/voucher-usages")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VoucherUsageController {

    private final VoucherUsageService voucherUsageService;

    @PostMapping
    public ResponseEntity<ApiResponse<VoucherUsage>> useVoucher(@Valid @RequestBody VoucherUsageRequest request) {
        VoucherUsage usage = voucherUsageService.useVoucher(request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Sử dụng voucher thành công", usage));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<VoucherUsage>>> getHistory() {
        List<VoucherUsage> history = voucherUsageService.getUsageHistory();
        return ResponseEntity.ok(new ApiResponse<>(true, "Lấy lịch sử sử dụng thành công", history));
    }
}