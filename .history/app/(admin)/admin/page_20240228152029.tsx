"use client";
import { app } from "@/firebase";
import { collection, onSnapshot, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
export default function Page() {
  const [bookings, setBookings] = useState<any>();

  useEffect(() => {
    const ref = collection(getFirestore(app), "bookings");
    const unsub = onSnapshot(ref, (querySnapshot) => {
      const snapshotData: any[] = [];
      querySnapshot.forEach((doc) => {
        snapshotData.push(doc.data());
      });
      setBookings(snapshotData);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-12 gap-3 sm:gap-6 text-white"></div>
  );
}
