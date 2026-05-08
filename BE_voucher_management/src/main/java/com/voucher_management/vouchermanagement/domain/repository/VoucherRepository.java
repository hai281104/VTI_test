package com.voucher_management.vouchermanagement.domain.repository;


import com.voucher_management.vouchermanagement.domain.entity.Voucher;

import java.util.List;
import java.util.Optional;

public interface VoucherRepository {
    Voucher save(Voucher voucher);
    Optional<Voucher> findById(Long id);
    boolean existsByCode(String code);
    List<Voucher> findAll();
    List<Voucher> searchByCode(String code);
    void deleteById(Long id);
}