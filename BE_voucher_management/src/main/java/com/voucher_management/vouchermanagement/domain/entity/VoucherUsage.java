package com.voucher_management.vouchermanagement.domain.entity;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VoucherUsage {
    private Long id;
    private Long userId;
    private Long voucherId;
    private LocalDateTime usedAt;
}