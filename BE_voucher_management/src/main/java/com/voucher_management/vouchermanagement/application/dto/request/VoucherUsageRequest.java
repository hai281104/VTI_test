package com.voucher_management.vouchermanagement.application.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class VoucherUsageRequest {
    @NotNull(message = "User ID không được để trống")
    private Long userId;

    @NotNull(message = "Voucher ID không được để trống")
    private Long voucherId;
}