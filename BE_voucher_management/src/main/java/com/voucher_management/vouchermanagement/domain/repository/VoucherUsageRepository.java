package com.voucher_management.vouchermanagement.domain.repository;

import com.voucher_management.vouchermanagement.domain.entity.VoucherUsage;
import java.util.List;

public interface VoucherUsageRepository {
    VoucherUsage save(VoucherUsage usage);
    List<VoucherUsage> findAll();
}