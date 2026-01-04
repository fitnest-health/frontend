'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MembershipDetails from './MembershipDetails';
import TapIcon from '@/public/icons/arcticons_tapscroll.svg';
import MembershipCardHeader from './MembershipCardHeader';

const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.35 },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.25 },
    },
};

type OpenCard = {
    id: string | null;
    device: 'mobile' | 'tablet' | null;
};

export default function MembershipCard({ item }: any) {
    const [openCard, setOpenCard] = useState<OpenCard>({
        id: null,
        device: null,
    });

    const isMobileOpen = openCard.id === item.id && openCard.device === 'mobile';
    const isTabletOpen = openCard.id === item.id && openCard.device === 'tablet';

    // 📱 Mobile toggle
    const handleMobileToggle = () => {
        if (window.innerWidth < 640) {
            setOpenCard(prev =>
                prev.id === item.id && prev.device === 'mobile'
                    ? { id: null, device: null }
                    : { id: item.id, device: 'mobile' }
            );
        }
    };

    // 📲 Tablet toggle
    const handleTabletToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenCard(prev =>
            prev.id === item.id && prev.device === 'tablet'
                ? { id: null, device: null }
                : { id: item.id, device: 'tablet' }
        );
    };

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className='md:px-10 md:py-[50px] sm:p-[26px] sm:rounded-4xl rounded-3xl bg-softblue-1100 text-neutral-50'
            onClick={handleMobileToggle}
        >
            <div className="flex flex-col md:flex-row md:gap-[60px] sm:gap-5">
                {/* ===== LEFT CARD ===== */}
                <div
                    className={`bg-softblue-1000 flex flex-col justify-between rounded-3xl sm:p-8 px-6 py-4 md:w-2/5 w-full md:h-auto sm:h-[376px] h-[220px]
                    ${isMobileOpen ? 'hidden sm:flex' : 'flex'}`}
                >
                    <MembershipCardHeader label={item.label} discount={item.discount} />
                </div>

                {/* ===== DESKTOP CONTENT ===== */}
                <div className="hidden md:block flex-1">
                    <MembershipDetails item={item} />
                </div>

                {/* ===== TABLET ICON ===== */}
                <div className="hidden sm:block md:hidden text-center">
                    <Image
                        src={TapIcon}
                        alt="tap"
                        className="mx-auto cursor-pointer"
                        onClick={handleTabletToggle}
                    />
                </div>
            </div>

            {/* ===== TABLET CONTENT ===== */}
            <AnimatePresence>
                {isTabletOpen && (
                    <motion.div
                        className="hidden sm:block md:hidden overflow-hidden"
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <MembershipDetails item={item} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== MOBILE CONTENT ===== */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="sm:hidden p-6 overflow-hidden"
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <MembershipDetails item={item} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
