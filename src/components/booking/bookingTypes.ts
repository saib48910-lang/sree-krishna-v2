export type BookingType = 'site-visit' | 'consultation';

export interface BookingData {
    type: BookingType | null;
    date: Date | null;
    timeSlot: string | null;
    name: string;
    phone: string;
    message: string;
}
