'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ConfirmationStep.module.css';
import { BookingData } from '@/components/booking/bookingTypes';

interface Props {
    data: BookingData;
}

export function ConfirmationStep({ data }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <CheckCircle size={64} className={styles.icon} />
            </div>

            <h2 className={styles.title}>Booking Confirmed!</h2>
            <p className={styles.message}>
                Thank you, <strong>{data.name}</strong>. Your request for a <strong>{data.type === 'site-visit' ? 'Site Visit' : 'Consultation'}</strong> has been received.
            </p>

            <div className={styles.detailsCard}>
                <div className={styles.row}>
                    <span>Booking ID:</span>
                    <span className={styles.value}>#SK{2024}</span>
                </div>
                <div className={styles.row}>
                    <span>Date:</span>
                    <span className={styles.value}>{data.date?.toLocaleDateString()}</span>
                </div>
                <div className={styles.row}>
                    <span>Time:</span>
                    <span className={styles.value}>{data.timeSlot}</span>
                </div>
            </div>

            <p className={styles.subtext}>Our team will contact you shortly.</p>

            <div className={styles.actions}>
                <Link href="/">
                    <Button variant="primary">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
}
