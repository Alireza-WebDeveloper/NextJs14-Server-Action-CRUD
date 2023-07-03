'use client'; // Error components must be Client Components

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset(): void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className=" flex flex-col items-center p-2 space-y-5">
      <h2 className="capitalize text-xl">{error.message}</h2>
      <button
        className=" bg-blue-500 inline-flex px-1 py-2 rounded-sm"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
