import Image from 'next/image';
import React from 'react';

const MeccaGiftCard = () => {
  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="relative w-80 h-[201.5px]">
          <Image
            src="/mecca-giftcard.png"
            alt="Mecca Gift Card"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default MeccaGiftCard;
