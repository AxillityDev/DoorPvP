"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      const querySnapshot = await getDocs(collection(db, "players"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlayers(data);
    };
    fetchPlayers();
  }, []);

  const filtered = players.filter((player) => {
    const matchesSearch = player.username.toLowerCase().includes(search.toLowerCase());
    const matchesTier = selectedTier ? player.tier === selectedTier : true;
    return matchesSearch && matchesTier;
  });

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">📜 DoorPvP Tierlista</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Szukaj gracza..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
        >
          <option value="">Wszystkie tier'y</option>
          {["HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5"].map((tier) => (
            <option key={tier} value={tier}>{tier}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((player) => (
          <Card key={player.id} className="rounded-xl shadow">
            <CardContent className="flex items-center gap-4 p-4">
              <img
                src={`https://minotar.net/avatar/${player.username}/60`}
                alt={player.username}
                className="rounded"
              />
              <div>
                <p className="font-semibold">{player.username}</p>
                <p className="text-sm text-gray-600">Tier: {player.tier}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
