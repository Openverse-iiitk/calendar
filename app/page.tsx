"use client"

import { useState } from "react"
import { addDays, setHours, setMinutes, subDays } from "date-fns"

import { EventCalendar, type CalendarEvent } from "@/components/event-calendar"
import ThemeToggle from "@/components/theme-toggle"

// Generate "Opensource Saturday" events for every Saturday in the next 12 months
// and add the special August event as described
const sampleEvents: CalendarEvent[] = (() => { 
  const events: CalendarEvent[] = [];
  // Add 'foss fits' event for November and December
  events.push({
    id: "foss-fits-2025",
    title: "foss fits",
    description: "A two-month open source fitness and wellness challenge!",
    start: new Date(2025, 10, 1), // November 1, 2025
    end: new Date(2025, 11, 31), // December 31, 2025
    allDay: true,
    color: "emerald",
    location: "Campus / Online",
  });
  // Add Advent of Code event for December 1-25
  events.push({
    id: "advent-of-code-2025",
    title: "Advent of Code",
    description: "Daily coding puzzles from Dec 1st to Dec 25th! Join the global challenge.",
    start: new Date(2025, 11, 1), // December 1, 2025
    end: new Date(2025, 11, 25), // December 25, 2025
    allDay: true,
    color: "sky",
    location: "Online",
  });
  // Add 'memend' event for November 7-9
  events.push({
    id: "memend-2025",
    title: "memend",
    description: "Ending semester with a meme making competition using open source tools!",
    start: new Date(2025, 10, 7), // November 7, 2025
    end: new Date(2025, 10, 9), // November 9, 2025
    allDay: true,
    color: "amber",
    location: "Campus / Online",
  });
  // Add 'Midsems' event from September 22 to 27
  events.push({
    id: "midsems-2025",
    title: "Midsems",
    description: "Mid semester exams week.",
    start: new Date(2025, 8, 22), // September 22, 2025
    end: new Date(2025, 8, 27), // September 27, 2025
    allDay: true,
    color: "sky",
    location: "Campus",
  });

  // Add 'Endsems' event from November 14 to 19
  events.push({
    id: "endsems-2025",
    title: "Endsems",
    description: "End semester exams week.",
    start: new Date(2025, 10, 14), // November 14, 2025
    end: new Date(2025, 10, 29), // November 19, 2025
    allDay: true,
    color: "rose",
    location: "Campus",
  });
  // Add 'skribbl but opensourced championship' on August 23
  events.push({
    id: "skribbl-opensource-2025",
    title: "skribbl but opensourced championship",
    description: "A championship event for an open source version of skribbl! Compete and have fun.",
    start: new Date(2025, 7, 23), // August 23, 2025
    end: new Date(2025, 7, 23),
    allDay: true,
    color: "amber",
    location: "Campus / Online",
  });

  // Add 'patch party' on October 4 to fix and find bugs
  events.push({
    id: "patch-party-2025",
    title: "patch party",
    description: "A bug fixing and finding event. Join to patch and improve open source projects!",
    start: new Date(2025, 9, 4), // October 4, 2025
    end: new Date(2025, 9, 4),
    allDay: true,
    color: "sky",
    location: "Campus / Online",
  });
  // Add 'penguin police' event on October 31st to teach open source security practices
  events.push({
    id: "penguin-police-2025",
    title: "penguin police",
    description: "A session to teach open source security practices.",
    start: new Date(2025, 10, 1), // October 31, 2025
    end: new Date(2025, 10, 1),
    allDay: true,
    color: "emerald",
    location: "Campus / Online",
  });
  // Add 'you cant jus copy paste' event on September 20th to explain licenses
  events.push({
    id: "no-copy-paste-2025",
    title: "you cant jus copy paste",
    description: "A session to explain open source licenses and why they matter.",
    start: new Date(2025, 8, 20), // September 20, 2025
    end: new Date(2025, 8, 20),
    allDay: true,
    color: "rose",
    location: "Campus / Online",
  });
  // Add Hacktoberfest for the entire month of October
  events.push({
    id: "hacktoberfest-2025",
    title: "Hacktoberfest",
    description: "Celebrate open source! Participate in Hacktoberfest all October.",
    start: new Date(2025, 9, 1), // October 1, 2025
    end: new Date(2025, 9, 31), // October 31, 2025
    allDay: true,
    color: "orange",
    location: "Campus / Online",
  });

  // Add 'git good' event on October 29th
  events.push({
    id: "git-good-2025",
    title: "git good",
    description: "A session to master git and version control workflows.",
    start: new Date(2025, 8, 28), // October 29, 2025
    end: new Date(2025, 8, 28),
    allDay: true,
    color: "amber",
    location: "Campus / Online",
  });
  // Add 'AT&T' Arduino teaching and touching event for October 15-17
  events.push({
    id: "att-arduino-2025",
    title: "AT&T",
    description: "Arduino teaching and touching event. Learn and experiment with Arduino!",
    start: new Date(2025, 9, 15), // October 15, 2025
    end: new Date(2025, 9, 17), // October 17, 2025
    allDay: true,
    color: "emerald",
    location: "Campus / Lab",
  });
  // Add 'center the div' event on October 24th to teach HTML and CSS
  events.push({
    id: "center-the-div-2025",
    title: "center the div",
    description: "A session to teach HTML and CSS. Learn how to center a div and more!",
    start: new Date(2025, 9, 24), // October 24, 2025
    end: new Date(2025, 9, 24),
    allDay: true,
    color: "amber",
    location: "Campus / Online",
  });
  // Add '/dev' event on October 10th to teach development
  events.push({
    id: "dev-2025",
    title: "/dev",
    description: "A session to teach development skills. All levels welcome!",
    start: new Date(2025, 9, 10), // October 10, 2025
    end: new Date(2025, 9, 10),
    allDay: true,
    color: "sky",
    location: "Campus / Online",
  });
  // Add 'Game Website with AI API' event for October 17-19
  events.push({
    id: "game-ai-api-2025",
    title: "Prompt (3 Days)",
    description: `A 3-day event to launch a game website with two AI-powered games!\n\n1) Whisper API Karaoke: Sing a song, get transcribed by Whisper, and compete on the leaderboard based on transcription accuracy.\n2) AI Image Prompt Battle: Prompt an AI image model, submit your image, and compete in public voting. Leaderboard for the best prompts/images.`,
    start: new Date(2025, 9, 17), // October 17, 2025
    end: new Date(2025, 9, 19), // October 19, 2025
    allDay: true,
    color: "violet",
    location: "Campus / Online",
  });
  // Add 'Brick by Brick: Linux CLI 101' event on October 3rd
  events.push({
    id: "brick-by-brick-cli-101-2025",
    title: "Brick by Brick: Linux CLI 101",
    description: "Intro to the Linux command line. Learn the basics and get hands-on!",
    start: new Date(2025, 9, 3), // October 3, 2025
    end: new Date(2025, 9, 3),
    allDay: true,
    color: "emerald",
    location: "Campus / Online",
  });
  // Add 'Hello Bot' event for bot launch on August 24
  events.push({
    id: "hello-bot-2025",
    title: "Hello Bot",
    description: "Bot launch! Our bot that answers everything goes live.",
    start: new Date(2025, 7, 24), // August 24, 2025
    end: new Date(2025, 7, 24),
    allDay: true,
    color: "sky",
    location: "Campus / Online",
  });
  // Add Mirrorcraft event from December to January
  events.push({
    id: "mirrorcraft-2025-2026",
    title: "Mirrorcraft",
    description: "Teams build an open source clone of any tool/website. Join, build, and learn!",
    start: new Date(2025, 11, 1), // December 1, 2025
    end: new Date(2026, 0, 31), // January 31, 2026
    allDay: true,
    color: "violet",
    location: "Campus / Online",
  });
    // Add "Its a Penguin" event for Linux installation party on August 26
    events.push({
      id: "its-a-penguin-2025",
      title: "Its a Penguin",
      description: "Linux installation party! Bring your laptop and get Linux installed.",
      start: new Date(2025, 8, 26), // August 26, 2025
      end: new Date(2025, 8, 26),
      allDay: true,
      color: "emerald",
      location: "Campus / Lab",
    });

    // Add "Riced to Meet You" event for rice showcase and chill on August 16
    events.push({
      id: "riced-to-meet-you-2025",
      title: "Riced to Meet You",
      description: "A rice showcase and chill event. Show off your riced setups!",
      start: new Date(2025, 7, 16), // August 16, 2025
      end: new Date(2025, 7, 16),
      allDay: true,
      color: "amber",
      location: "Campus / Online",
    });
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const end = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

  // (removed duplicate declaration)
  // Add ctrl + O event on August 26th
  events.push({
    id: "ctrl-o-2025",
    title: "ctrl + O",
    description: "Goal: Introduce key concepts, tools, and opportunities in the open-source ecosystem.",
    start: new Date(2025, 8, 26), // August 26, 2025
    end: new Date(2025, 8, 26),
    allDay: true,
    color: "sky",
    location: "Campus / Online",
  });
  // ...existing code...
  // Add FOSSil Fuel event on September 20th
  events.push({
    id: "fossil-fuel-2025",
    title: "FOSSil Fuel",
    description: "FOSSil Fuel event! Join us for open source energy and fun.",
    start: new Date(2025, 8, 19), // September 20, 2025
    end: new Date(2025, 8, 19),
    allDay: true,
    color: "emerald",
    location: "Campus",
  });

  // Mark August 24th as Freshers Induction
  events.push({
    id: "freshers-induction-2025",
    title: "Freshers Induction",
    description: "Welcome to all freshers! Induction event.",
    start: new Date(2025, 7, 24), // August 24, 2025
    end: new Date(2025, 7, 24),
    allDay: true,
    color: "amber",
    location: "Campus Auditorium",
  });

  // Mark Aug 24 to Sept 20 as Fresher Quarantine (red)
  events.push({
    id: "fresher-quarantine-2025",
    title: "Fresher Quarantine",
    description: "Fresher quarantine period. Special rules apply!",
    start: new Date(2025, 7, 24), // August 24, 2025
    end: new Date(2025, 8, 20), // September 20, 2025
    allDay: true,
    color: "rose",
    location: "Campus",
  });
  // (removed duplicate declaration)
  let current = new Date(start);
  // Find the next Saturday
  current.setDate(current.getDate() + ((6 - current.getDay() + 7) % 7));
  let id = 1;
  while (current < end) {
    // Only add events that are not in July (month 6, 0-indexed)
    if (current.getMonth() !== 6) {
      events.push({
        id: id.toString(),
        title: "Opensource Saturday",
        description: "Join us for open source collaboration!",
        start: new Date(current),
        end: new Date(current),
        allDay: true,
        color: "emerald",
        location: "Online / Community Space",
      });
    }
    current.setDate(current.getDate() + 7);
    id++;
  }


  // Add the special August event
  events.push({
    id: "august-special-2025",
    title: "Summer Project Roast + Poems!",
    description:
      "Aug 4: Post on freshers and IG. Hey people, let's have a fun time networking and sharing what we did during summer, and roast it using poems!\n\nForm open till Aug 15.\n\nAug 15: We post the projects on a public page and hope everyone writes poems roasting them.\n\nAug 23: Offline event where we display the project and the poet will present their poem roasting it.",
    start: new Date(2025, 7, 4), // August is month 7 (0-indexed)
    end: new Date(2025, 7, 23),
    allDay: true,
    color: "violet",
    location: "Campus & Online",
  });

  // Add the September campus photowalk + website event
  events.push({
    id: "campus-photowalk-sept-2025",
    title: "Campus Photowalk & Street View Website Collab!",
    description:
      "Chitrachhaya + others: Full campus photowalk (Canon R & phones). Cover every major area, then build a website where people can explore the campus like Google Street View. Clean, high-res, long-term archive if done well! Open for collab via Openverse.",
    start: new Date(2025, 8, 27), // September 27, 2025 (last Saturday)
    end: new Date(2025, 8, 28),
    allDay: true,
    color: "sky",
    location: "Campus (all major areas)",
  });

  return events;
})();

export default function Home() {
  const [events, setEvents] = useState<CalendarEvent[]>(sampleEvents)

  const handleEventAdd = (event: CalendarEvent) => {
    setEvents([...events, event])
  }

  const handleEventUpdate = (updatedEvent: CalendarEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )
  }

  const handleEventDelete = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId))
  }

  // Set initial date to August 1st of the current year
  const initialDate = new Date(new Date().getFullYear(), 7, 1);
  return (
    // Add min-h-screen to make it full height
    <div className="flex flex-col p-1 sm:p-4 md:p-8">
      <EventCalendar
        events={events}
        onEventAdd={handleEventAdd}
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
        initialView="month"
        initialDate={initialDate}
      />
      <div className="mt-4">
        <ThemeToggle />
      </div>
    </div>
  )
}
