'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import styles from './ContactInfo.module.css';

export function ContactInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h2 className={styles.title}>Direct Contact</h2>
                <div className={styles.directGrid}>
                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Call Us</h3>
                            <p className={styles.cardVal}>
                                <a href="tel:+919494444818" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9494444818</a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>WhatsApp</h3>
                            <p className={styles.cardVal}>
                                <a href="https://wa.me/919494444818" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Chat Now</a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconCircle}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Email Us</h3>
                            <p className={styles.cardVal}>
                                <a href="mailto:sreekrishna.housingprojects@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sreekrishna.housingprojects@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.title}>Office Location</h2>
                <div className={styles.locationCard}>
                    <MapPin size={24} className={styles.pinIcon} />
                    <p className={styles.address}>
                        <strong>Sree Krishna Housing Projects</strong><br />
                        2nd Floor, American Towers,<br />
                        Opp Keerthi Medicals, LeelaMahal Circle,<br />
                        TML By Pass Road, Tirupati - 517501
                    </p>
                </div>

                <div className={styles.locationCard}>
                    <Clock size={24} className={styles.pinIcon} />
                    <p className={styles.address}>
                        <strong>Business Hours</strong><br />
                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                    </p>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        src="https://maps.google.com/maps?q=American+Towers,+Leela+Mahal+Circle,+Tirupati,+Andhra+Pradesh+517501&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sree Krishna Housing Projects Office Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
