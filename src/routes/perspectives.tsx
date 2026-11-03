import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/perspectives")({
  beforeLoad: () => {
    throw redirect({ to: "/perspective" });
  },
});

