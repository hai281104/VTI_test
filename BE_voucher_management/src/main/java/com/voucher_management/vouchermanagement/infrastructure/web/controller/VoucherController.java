package com.voucher_management.vouchermanagement.infrastructure.web.controller;

import com.voucher_management.vouchermanagement.application.dto.request.VoucherRequest;
import com.voucher_management.vouchermanagement.application.dto.response.ApiResponse;
import com.voucher_management.vouchermanagement.application.service.VoucherService;
import com.voucher_management.vouchermanagement.domain.entity.Voucher;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vouchers")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VoucherController {

    private final VoucherService voucherService;

    @PostMapping
    public ResponseEntity<ApiResponse<Voucher>> create(@Valid @RequestBody VoucherRequest request) {
        Voucher voucher = voucherService.create(request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Create voucher successfully", voucher));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Voucher>> update(@PathVariable Long id, @Valid @RequestBody VoucherRequest request) {
        Voucher voucher = voucherService.update(id, request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Update voucher successfully", voucher));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        voucherService.delete(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Delete voucher successfully", null));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Voucher>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true, "Get vouchers successfully", voucherService.getAll()));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Voucher>>> search(@RequestParam("code") String code) {
        return ResponseEntity.ok(new ApiResponse<>(true, "Search vouchers successfully", voucherService.search(code)));
    }
}