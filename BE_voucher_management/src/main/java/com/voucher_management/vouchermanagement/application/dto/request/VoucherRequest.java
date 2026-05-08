package com.voucher_management.vouchermanagement.application.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;
import java.time.LocalDate;

@Data
public class VoucherRequest {
    @NotBlank(message = "Code không được để trống")
    private String code;

    @NotNull(message = "Discount percent không được để trống")
    @Min(value = 1, message = "Discount percent từ 1 -> 100")
    @Max(value = 100, message = "Discount percent từ 1 -> 100")
    private Integer discountPercent;

    @NotNull(message = "Quantity không được để trống")
    @Min(value = 0, message = "Quantity >= 0")
    private Integer quantity;

    @NotNull(message = "Expired date không được để trống")
    @Future(message = "Expired date phải lớn hơn ngày hiện tại")
    private LocalDate expiredDate;

    private String status = "ACTIVE";
}