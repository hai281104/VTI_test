package com.voucher_management.vouchermanagement.domain.entity;

import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Voucher {
    private Long id;
    private String code;
    private Integer discountPercent;
    private Integer quantity;
    private LocalDate expiredDate;
    private String status;
    private LocalDateTime createdAt;
}