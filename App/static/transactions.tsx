import React from "react";
import { Target } from "phosphor-react-native";
import { TranCardProps } from "../components/TranscationCard/TranCard";
import { Categories } from "../interfaces/AppComponents";

const transactions: TranCardProps[] = [
  {
    tag: "Bus",
    amount: "$30",
    date: "Today",
    time: "11:30",
    icon: <Target />,
    id: 1,
  },
  {
    tag: "Bus",
    amount: "$30",
    date: "Today",
    time: "11:30",
    icon: <Target />,
    id: 2,
  },
];

const categories: Categories[] = [
  { color: "#fc5c65", icon: "floor-lamp", label: "Furniture", value: 1 },
  { color: "#fd9644", icon: "car", label: "Cars", value: 2 },
  { color: "#fed330", icon: "camera", label: "Camera", value: 3 },
  { color: "#26de81", icon: "cards", label: "Games", value: 4 },
  { color: "#26de81", icon: "shoe-heel", label: "Clothings", value: 5 },
  { color: "#45aaf2", icon: "basketball", label: "Sports", value: 6 },
  { color: "#45aaf2", icon: "headphones", label: "Movies & Music", value: 7 },
  { color: "#45aaf2", icon: "book", label: "Books", value: 8 },
  { color: "#4b7bec", icon: "book", label: "Other", value: 9 },
];

export { transactions, categories };
