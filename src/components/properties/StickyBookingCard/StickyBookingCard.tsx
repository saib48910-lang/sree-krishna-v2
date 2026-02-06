'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { Phone, MessageCircle } from 'lucide-react';
import styles from './StickyBookingCard.module.css';

export function StickyBookingCard() {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Interested in this property?</h3>
            <p className={styles.subtitle}>Our experts are here to help you.</p>

            <div className={styles.actions}>
                <Link href="/booking">
                    <Button variant="primary" fullWidth size="lg">Book Site Visit</Button>
                </Link>
                <Button variant="outline" fullWidth size="lg">Request Details</Button>
            </div>

            <div className={styles.contactMethods}>
                <a href="tel:+919494444818" className={styles.contactBtn} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} /> Call Now
                </a>
                <a href="https://wa.me/919494444818" target="_blank" rel="noopener noreferrer" className={styles.contactBtn} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageCircle size={18} /> WhatsApp
                </a>
            </div>

            <p className={styles.disclaimer}>
                No obligation. 100% Free Consultation.
            </p>
        </div>
    );
}
