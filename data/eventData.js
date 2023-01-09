import { SALUTATION } from "@/constants/misc";

// import "/images/events/shorts.webp" from "../images/events/shorts.webp";
// import "/images/events/bingo.jpg" from "../images/events/bingo.jpg";

export const EVENT_DATA = [
  {
    name: "Shorts",
    duration: "2 - 5 mins",
    noOfParticipants: "5 - 8",
    tags: [
      { label: "Prelude", color: "red" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Gender Equality, recession or Goan tourism",
      "The short film must be original and no watermark of any kind should be on the film.",
      "The film must be of highest quality possible.",
      "Adult content of any kind will not be entertained and would lead to direct disqualification.",
      "The short shall be submitted via xtravaganza2022@gmail.com on or before 10 th Jan 2023 by 12.00 noon.",
      "Winners of the event will be based on Likes & content.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Nikita Gawade", number: "8605455526" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/shorts.webp",
    },
  },
  {
    name: "Snapshot",
    duration: "",
    noOfParticipants: "1",
    tags: [
      { label: "Prelude", color: "red" },
      { label: "Solo", color: "#228B22" },
    ],
    rules: [
      "Theme: Reflective",
      "Each team shall submit one photo.",
      "Participant must use DSLR Camera and other required equipment.",
      "Soft copy of the photo must be mailed in JPEG format by 1 p.m. on or before 10th Jan 2023 and should be submitted via xtravaganza2022@gmail.com",
      "Winners of the event will be based on Likes & content.",
      "Photo should be in its original form without any editing or filter.",
      "No Selfie is allowed.",
      `Photos that portray or otherwise include inappropriate and/or offensive content,
      including provocative nudity, violence, human rights and/or environmental violation,
      and/or any other contents deemed to be contrary to the law, religious, cultural &
      moral traditions and practices of India, are strictly prohibited and will be immediately
      discarded.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Mithilesh Arondekar",
        number: "9561995691",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/camera.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Brainwave",
    duration: "",
    noOfParticipants: "1",
    tags: [
      { label: "Prelude", color: "red" },
      { label: "Solo", color: "#228B22" },
    ],
    rules: [
      "Theme: College Life",
      "A participant can submit only one MEME.",
      "Good resolution in your submissions is necessary.",
      "It should be original and depict humor.",
      `Meme Photo should be in .jpg or .jpeg format with file
      size not exceeding 5 MB.`,
      `The Meme shall be submitted via xtravaganza2022@gmail.com
      on or before 10 th Jan 2023 by 12.00 noon.`,
      "Winners of the event will be based on Likes.",
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.ms,
        name: "Akansha Mahale",
        number: "8263872917",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/brain_wave.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Hashtag",
    duration: "30 - 45 sec",
    noOfParticipants: "5 - 10",
    category: "Off Stage",
    tags: [
      { label: "Prelude", color: "red" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Myth",
      "The participants should make a reel on the given theme.",
      `The reel shall be submitted via xtravaganza2022@gmail.com on or
      before 9th Jan 2023 by 12.00 noon.`,
      `The reel will be shared by the organising team on the official page of
      __XTRAVAGANZA__ on 10th Jan 2023 by 4.00 p.m.`,
      "Winners of the event will be based on Likes & content.",
      "Decision of judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.mr, name: "Pranav Naik", number: "7620460025" },
      { gender: SALUTATION.mr, name: "Pranav Naik", number: "7264014711" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/hashtag.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Human Bingo",
    duration: "3 - 4 mins",
    noOfParticipants: "All",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      `Participants must introduce the team in an unique
     manner.`,
      `Team name will be given by the organiser at the time
     of registration.`,
      `Use of props is allowed.`,
      "Decision of judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Raj Mavlankar (GS)",
        number: "9130826571",
      },
      {
        gender: SALUTATION.mr,
        name: "Raj Mavlankar (GS)",
        number: "9022587219",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/bingo.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Soloist",
    duration: "2 - 3 mins",
    noOfParticipants: "1",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Solo", color: "#228B22" },
    ],
    rules: [
      "Theme: Open",
      "The song could be either in Konkani, Marathi, Hindi or English.",
      "Participant can sing his/her original composition.",
      `Participant can play instrument (if any) on their own but cannot be accompanied by any other
     person to play an instrument.`,
      `Participant should carry the background music track on pen drive and shall submit at the time
     of registration.`,
      "Participants will not be allowed to refer to the lyrics while singing.",
      `The participants will be judged on the song selection, voice quality, clarity, rhythm and their
     appeal to the audience.`,
      `Choice of song is open to the participants but the song should not have any slangs or
     derogatory language.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Sonali Bandekar", number: "8010760096" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/soloist.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Turn It Up",
    duration: "3 - 5 mins",
    noOfParticipants: "5 - 8",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Free Style Group Dance",
      `Team should carry the background music track on pen drive and
     shall submit at the time of registration.`,
      `Use of props is allowed. Prior permission needs to be taken for
     utilization of props.`,
      "Dance performers should not convey any indecent gestures.",
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Neha Govekar", number: "9325735870" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/turn_it_up.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Mr. & Ms. Xtravaganza",
    duration: "",
    noOfParticipants: "2 Participants (1 Girl & 1 Boy)",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Three Rounds:",
      `Introduction Round:
      Participant need to do ramp walk and introduce themselves.`,
      `Talent Round:
      Participants have to showcase their talent within 2 minutes.
      Participant should carry the background music on pen drive and shall submit it during registration.`,
      `Question/Answer Round
      This is question and answer round where intellectual abilities will be tested`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.ms,
        name: "Sushanti Parab (LR)",
        number: "9322360135",
      },
      {
        gender: SALUTATION.mr,
        name: "Pratham Sarmalkar",
        number: "9284850043",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/mr_extravaganza.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Fashionista",
    duration: "10 mins",
    noOfParticipants: "8 - 12",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Wild",
      `Team should carry their background music track on
      pen drive and shall submit at the time of registration.`,
      "Teams should bring their own props.",
      `Vulgarity is strictly prohibited. Any form of obscenity
      will lead to disqualification of the team.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Avishkar Sawal Desai",
        number: "8484989052",
      },
      { gender: SALUTATION.ms, name: "Daya Naik", number: "9765648646" },
      { gender: SALUTATION.ms, name: "Daya Naik", number: "7020133995" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/fashionista.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Innovation In U",
    duration: "5 mins",
    noOfParticipants: "Max 2",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      `Participant will have to do PowerPoint
      Presentation of a business plan for a new venture.`,
      `PPT shall be submitted to the email id
      xtravaganza2022@gmail.com by 10th Jan 2023 by
      2.p.m.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.mr, name: "Sagar Zantye", number: "7588239874" },
      { gender: SALUTATION.mr, name: "Sagar Zantye", number: "9370429174" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/innovation.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Ad Maniac",
    duration: "1 - 2 mins",
    noOfParticipants: "2 - 3",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Product Advertising",
      `Product to be advertised will be provided at the time
      of registration.`,
      `Caution should be taken to refrain from displaying
      obscenity, violence, prejudice, defamation etc. in the
      advertisement. In case of any such act, team shall be
      disqualified from that event.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Priyanka Mathkar", number: "8788818822" },
      { gender: SALUTATION.ms, name: "Jagruti Chari", number: "9673170763" },
      { gender: SALUTATION.ms, name: "Jagruti Chari", number: "9021617893" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/ad_maniac.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Let's Get Quizzical",
    duration: "",
    noOfParticipants: "2",
    tags: [
      { label: "On Stage", color: "#6127ff" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      `It is a quiz competition between teams.`,
      `Questions will be related to General Knowledge, logical
      reasoning, etc.`,
      `There will be total three rounds. The second round will be
      elimination round followed by final round.`,
      `Detail rules and regulation of each round will be explained at
      the time of event.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Shivani Dessai", number: "8468948068" },
      { gender: SALUTATION.mr, name: "Pratiksha Naik", number: "9607484966" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/quiz.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Hunters for hire",
    duration: "",
    noOfParticipants: "2",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      `Participants will be provided set of clues based on
      which they have to hunt for the final destination.`,
      `The first three teams reaching the final destination
      will secure first, second and third place respectively.`,
      `Participants cannot carry smart phone, earphone,
      Bluetooth or any other electronic device.`,
      `During the event, any kind of communication/
      interaction with others except organising team is
      strictly prohibited.`,
      `Cheating, sabotaging, removing hidden items/ clues
      will lead to disqualification.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.mr, name: "Ayush Mayekar", number: "7773918363" },
      { gender: SALUTATION.mr, name: "Roger Fernandes", number: "9423467131" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/hire.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Maquillage",
    duration: "1hr",
    noOfParticipants: "2",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme : Topic will be given on the spot",
      "Participants should bring their own colors, brushes etc.",
      `Participants will be judged on the basis of creativity,
        innovation and design.`,
      `Usage of any reference material is strictly prohibited.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Kajal Rawool", number: "8421622620" },
      { gender: SALUTATION.mr, name: "Bhavesh Narvekar", number: "7038403560" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/maquillage.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Artistry",
    duration: "1hr",
    noOfParticipants: "1",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Solo", color: "#228B22" },
    ],
    rules: [
      "Theme: Topic will be given on the spot",
      `Participant is required to paint a GLASS bottle which
      will be provided by the organizers.`,
      "Usage of any reference material is strictly prohibited.",
      `Participants will be judged on the basis of creativity,
      innovation and design.`,
      "Participant should bring their own material/colours.",
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.ms,
        name: "Kajal Rawool",
        number: "8421622620",
      },
      {
        gender: SALUTATION.ms,
        name: "Yogeshwari Naik",
        number: "7666194519",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/artistry.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Street Play",
    duration: "10 mins",
    noOfParticipants: "8 - 10",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Theme: Women Safety, COVID, NEP",
      `The Competition will be conducted in an open place and hence no microphones,
      Speakers will be allowed or available.`,
      `Teams using any props / Costume / Dressing must bring all their requirements and
      must be ready well in time as per instructions of the organizer. No Props or costume
      or any material will be provided by the host college.`,
      `Teams should maintain decency and decorum in the behavior, attire and
      performance.`,
      `Teams must rehearse / practice the play well in advance. No Time for rehearsal /
      Stage practice / final rehearsal will be given during the fest.`,
      `Language usuage : Konkani, Hindi, Marathi.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      { gender: SALUTATION.ms, name: "Yamini Bandekar", number: "9168751046" },
      { gender: SALUTATION.ms, name: "Yamini Bandekar", number: "8010617244" },
      { gender: SALUTATION.ms, name: "Sneha Sawant", number: "8408924339" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/street_play.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Scavengers",
    duration: "",
    noOfParticipants: "2 (1 Girl & 1 Boy)",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      "Participants will be given physical task to perform on the spot.",
      "No replacement of the players during the physical task.",
      "Participants are requested to carry an extra pair of clothes.",
      "Participant shall adhere to the rules and regulations of the physical task.",
      "Non - adherence shall lead to disqualification of the team.",
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Nikhil Kandolkar (SS)",
        number: "7066625390",
      },
      { gender: SALUTATION.mr, name: "Sanket Halankar", number: "7499748295" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/scavengers.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Sweepstakes",
    duration: "",
    noOfParticipants: "8 (Including at least one female)",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    rules: [
      `Both teams pull the rope, the winner being
      the team who manage to pull the mark on
      the rope closest to their opponents over
      the centre line.`,
      `The rope must be pulled underarm and
      nobody’s elbow must go below the knee,
      otherwise a foul will be called.`,
      `Matches are best of three pull, the winner
      winning two out of the three pulls.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Nehal Kashalkar",
        number: "8530889967",
      },
      { gender: SALUTATION.mr, name: "Sanket Halankar", number: "7499748295" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/tug_of_war.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Snakes And Ladders",
    duration: "",
    noOfParticipants: "2",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Group", color: "#0D5BE1" },
    ],
    // description: [
    //   `Using a life sized Snakes and Ladders game field, participants will be able to play
    // Snakes and Ladders as the pieces on the board.`,
    //   `They will play the game using a life sized dice and whenever they reach a snake or
    // ladder on the board, they will be asked to answer a technical question. Ready to climb
    // some ladders and dodge some venomous snakes?`,
    // ],
    // format: [
    //   `Each game will take place for a maximum of 20 minutes, with 4 teams playing in a
    // game.`,
    //   `Each team will have 2 members, who will take the place of the board piece.`,
    //   `Questions will be asked to the contestants each time they encounter a snake or a
    //   ladder.`,
    //   `The difficulty of question will increase and after 60-70 squares possible question
    //   will be: Name the company, whose slogan is the "power of dreams"?`,
    //   `No prior registration is required to participate in this.`,
    // ],
    coordinators: [
      {
        gender: SALUTATION.ms,
        name: "Shivani Dessai",
        number: "8468948068",
      },
      { gender: SALUTATION.ms, name: "Pratiksha Naik", number: "9607484966" },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/snake_and_ladder.webp",
      // cardContentStart: "end",
    },
  },
  {
    name: "Impersonation",
    duration: "",
    noOfParticipants: "1",
    tags: [
      { label: "Off Stage", color: "#F28C28" },
      { label: "Solo", color: "#228B22" },
    ],
    rules: [
      "Participant have to dress and act as a character.",
      `Participant will be judged on character
     portrayed, expressions, gesture and crowd
     engagement.`,
      `Participant is not allowed to use face
     mask/hazardous material/music track.`,
      `The caution should be taken to refrain from
     displaying obscenity, violence, prejudice,
     defamation etc.`,
      `Detail rules and regulations will be explained at
     the time of event.`,
      "Decision of Judges will be final and binding.",
    ],
    coordinators: [
      {
        gender: SALUTATION.mr,
        name: "Viraj Rao",
        number: "9579465210",
      },
    ],
    cssOptions: {
      allowFloatingTags: true,
      highlightImg: "/images/events/impersonation.webp",
      // cardContentStart: "end",
    },
  },
];
