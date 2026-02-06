'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingTypeStep } from '../BookingTypeStep/BookingTypeStep';
import { DateTimeStep } from '../DateTimeStep/DateTimeStep';
import { UserDetailsStep } from '../UserDetailsStep/UserDetailsStep';
import { ConfirmationStep } from '../ConfirmationStep/ConfirmationStep';
import styles from './BookingWizard.module.css';

import { BookingData } from '../bookingTypes';

export function BookingWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState<BookingData>({
        type: null,
        date: null,
        timeSlot: null,
        name: '',
        phone: '',
        message: ''
    });

    const updateData = (updates: Partial<BookingData>) => {
        setData(prev => ({ ...prev, ...updates }));
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    return (
        <div className={styles.wizardCard}>
            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(currentStep / 4) * 100}%` }} />
            </div>

            <div className={styles.content}>
                <AnimatePresence mode='wait'>
                    {currentStep === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <BookingTypeStep data={data} updateData={updateData} onNext={nextStep} />
                        </motion.div>
                    )}
                    {currentStep === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <DateTimeStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />
                        </motion.div>
                    )}
                    {currentStep === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <UserDetailsStep data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />
                        </motion.div>
                    )}
                    {currentStep === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                            <ConfirmationStep data={data} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
