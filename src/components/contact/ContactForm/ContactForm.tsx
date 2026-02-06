'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ContactForm.module.css';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) return;

        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className={styles.successCard}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successDesc}>Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Send us a Message</h2>
            <p className={styles.subtitle}>Interested in a property? Have a question? Fill out the form below.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        className={styles.input}
                        placeholder="+91 9494444818"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email (Optional)</label>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea
                        className={styles.textarea}
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <Button
                    variant="primary"
                    fullWidth
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? (
                        <><Loader2 size={16} className={styles.spin} /> Sending...</>
                    ) : (
                        <>Send Message <ArrowRight size={16} style={{ marginLeft: 8 }} /></>
                    )}
                </Button>
            </form>
        </div>
    );
}
