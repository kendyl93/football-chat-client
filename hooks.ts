import axios from "axios";
import { useEffect, useState } from "react";

export const API_URL = `http://192.168.1.35`; // need to put ip from ifconfig

export interface ChatRoom {
    homeTeam: any;
    awayTeam: any;
    matchId: number;
    status: string;
    utcStartDate: string;
    expireAt: Date;
    messages: any;
}

export const useGetAppData = () => {
    const [matches, setMatches] = useState<ChatRoom[]>([])

    useEffect(() => {
        const getAPIdata = async () => {
            try {
                const response = await axios.get(`${API_URL}:4001/api/chatRoom/redisChatRooms`); // put IP instead of localhost
                setMatches(response?.data?.data?.matches);
            } catch (error) {
                console.error(error)
            }
        }

        getAPIdata();
    }, [])

    return matches
}