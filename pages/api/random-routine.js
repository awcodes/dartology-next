import allRoutines from "../../data/routines.json";

export default function handler(req, res) {
  const routine = allRoutines[Math.floor(Math.random() * allRoutines.length)];
  res.redirect(`/routines/${routine.slug}`);
}
