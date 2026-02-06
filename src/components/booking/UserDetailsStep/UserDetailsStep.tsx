'use client';

import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './UserDetailsStep.module.css';
import { BookingData } from '@/components/booking/bookingTypes';

interface Props {
    data: BookingData;
    updateData: (updates: Partial<BookingData>) => void;
    onNext: () => void;
    onBack: () => void;
}

export function UserDetailsStep({ data, updateData, onNext, onBack }: Props) {

    const isValid = data.name && data.phone;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Your Details</h2>

            <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="John Doe"
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input
                    type="tel"
                    className={styles.input}
                    placeholder="+91 98765 43210"
                    value={data.phone}
                    onChange={(e) => updateData({ phone: e.target.value })}
                />
            </div>



            <div className={styles.formGroup}>
                <label className={styles.label}>Message (Optional)</label>
                <textarea
                    className={styles.textarea}
                    placeholder="Any specific requests?"
                    value={data.message}
                    onChange={(e) => updateData({ message: e.target.value })}
                />
            </div>

            <div className={styles.actions}>
                <Button variant="outline" onClick={onBack}>
                    <ArrowLeft size={16} style={{ marginRight: 8 }} /> Back
                </Button>
                <Button
                    variant="primary"
                    onClick={onNext}
                    disabled={!isValid}
                >
                    Confirm Booking <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </Button>
            </div>
        </div>
    );
}
