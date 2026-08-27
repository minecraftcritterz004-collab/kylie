import Image from 'next/image';
import React from 'react';

const MeccaGiftCard = () => {
  return (
    <>
      <div className="flex items-center justify-center p-6">
        <div className="relative w-[300px] h-[200px] mt-[1rem] m-auto">
          <Image
            src="/giftcard.png"
            alt="Mecca Gift Card"
            fill
            className="drop-shadow-2xl rounded-[1em]"
          />
        </div>
      </div>
    </>
  );
};

export default MeccaGiftCard;
