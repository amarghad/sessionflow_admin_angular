import {Candidate} from "./candidate";

export enum ReservationStatus {
  PENDING,
  CONFIRMED,
  CANCELLED,
  COMPLETED
}
export interface Reservation {
  id: string;
  status: ReservationStatus;
  candidateDto: Candidate;
}
