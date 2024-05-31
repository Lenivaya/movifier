import { PrismaClient } from "@prisma/client";
import { PasswordHasher } from "@/services/passwordHasher";

const prisma = new PrismaClient();

async function main() {
  await prisma.movifierAppUser.create({
    data: {
      email: "admin@gmail.com",
      name: "Admin",
      username: "admin",
      password: await PasswordHasher.hashPassword("12345"),
      role: "ADMIN",
    },
  });

  // CrewMemberTypes
  await prisma.movieCrewMemberType.createMany({
    data: [
      { name: "Director" },
      { name: "Producer" },
      { name: "Writer" },
      { name: "Actor" },
      { name: "Cinematographer" },
      { name: "Editor" },
      { name: "Composer" },
      { name: "Production Designer" },
      { name: "Costume Designer" },
      { name: "Makeup Artist" },
      { name: "Sound Designer" },
      { name: "Visual Effects Artist" },
    ],
  });
  const actor = await prisma.movieCrewMemberType.findUnique({
    where: { name: "Actor" },
  });
  const director = await prisma.movieCrewMemberType.findUnique({
    where: { name: "Director" },
  });
  const producer = await prisma.movieCrewMemberType.findUnique({
    where: { name: "Producer" },
  });

  // MovieStudios
  await prisma.movieStudio.createMany({
    data: [
      { name: "Warner Bros. Pictures" },
      { name: "Universal Pictures" },
      { name: "Columbia Pictures" },
      { name: "Paramount Pictures" },
      { name: "20th Century Fox" },
      { name: "Walt Disney Pictures" },
      { name: "New Line Cinema" },
      { name: "DreamWorks Pictures" },
      { name: "Metro-Goldwyn-Mayer" },
      { name: "Lionsgate" },
      { name: "Miramax Films" },
      { name: "Focus Features" },
      { name: "Sony Pictures Classics" },
      { name: "Fox Searchlight Pictures" },
      { name: "United Artists" },
      { name: "TriStar Pictures" },
      { name: "Orion Pictures" },
      { name: "Dimension Films" },
      { name: "The Weinstein Company" },
      { name: "A24" },
      { name: "Netflix" },
    ],
  });

  // MovieSpokenLanguage
  await prisma.movieSpokenLanguage.createMany({
    data: [
      { language: "English" },
      { language: "Spanish" },
      { language: "French" },
      { language: "German" },
      { language: "Italian" },
      { language: "Mandarin" },
      { language: "Japanese" },
      { language: "Korean" },
      { language: "Hindi" },
      { language: "Arabic" },
      { language: "Russian" },
      { language: "Portuguese" },
      { language: "Dutch" },
      { language: "Swedish" },
      { language: "Danish" },
      { language: "Finnish" },
      { language: "Norwegian" },
      { language: "Polish" },
      { language: "Turkish" },
      { language: "Greek" },
      { language: "Ukrainian" },
      { language: "Czech" },
      { language: "Hungarian" },
      { language: "Romanian" },
      { language: "Bulgarian" },
      { language: "Hebrew" },
      { language: "Thai" },
      { language: "Indonesian" },
      { language: "Vietnamese" },
      { language: "Swahili" },
      { language: "Zulu" },
    ],
  });

  // Genre
  await prisma.genre.createMany({
    data: [
      { name: "Action" },
      { name: "Adventure" },
      { name: "Animation" },
      { name: "Comedy" },
      { name: "Crime" },
      { name: "Drama" },
      { name: "Fantasy" },
      { name: "History" },
      { name: "Horror" },
      { name: "Music" },
      { name: "Mystery" },
      { name: "Romance" },
      { name: "Science Fiction" },
      { name: "Thriller" },
      { name: "War" },
      { name: "Western" },
      { name: "Documentary" },
      { name: "TV Movie" },
      { name: "Family" },
    ],
  });

  // Killer 2023
  const david_fincher = await prisma.movieCrewMember.create({
    data: {
      name: "David Fincher",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/tpEczFclQZeKAiCeKZZ0adRvtfz.jpg",
      description:
        "David Andrew Leo Fincher is an American film director. Known for his psychological thrillers, his films have received 40 nominations at the Academy Awards, including three for him as Best Director.",
      imdbId: "nm0000399",
    },
  });
  const michael_fassbender = await prisma.movieCrewMember.create({
    data: {
      name: "Michael Fassbender",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/xvbnUiB2ZBR3QIt595OzNy657Vw.jpg",
      description:
        "Michael Fassbender is an Irish-German actor. His feature film debut was in the fantasy war epic 300 (2007) as a Spartan warrior; his earlier roles included various stage productions, as well as starring roles on television such as in the HBO miniseries Band of Brothers (2001) and the Sky One fantasy drama Hex (2004–05).",
      imdbId: "nm1055413",
    },
  });
  const tilda_swinton = await prisma.movieCrewMember.create({
    data: {
      name: "Tilda Swinton",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/gWbX3a7V2MgRMRzekfITNcb27xV.jpg",
      description:
        "Katherine Matilda Swinton is a British actress known for her roles in both independent arthouse films and blockbusters. She won the Academy Award for Best Supporting Actress for her performance in the 2007 film Michael Clayton.",
      imdbId: "nm0842770",
    },
  });

  const the_killer_2023 = await prisma.movie.create({
    data: {
      movieInfo: {
        create: {
          imdbId: "tt1136617",
          title: "The Killer",
          description:
            "After a fateful near-miss, an assassin battles his employers, and himself, on an international manhunt he insists isn’t personal.",
          releaseDate: new Date("2023-09-03"),
          durationInMinutes: 118,
          alternativeTitles: ["The Killer 2023"],
          posterUrl:
            "https://a.ltrbxd.com/resized/film-poster/7/1/7/6/5/4/717654-the-killer-0-1000-0-1500-crop.jpg?v=39fba8ec40",
        },
      },
      crewMembers: {
        create: [
          {
            movieCrewMemberId: david_fincher.id,
            movieCrewMemberTypeId: director!.id,
          },
          {
            movieCrewMemberId: michael_fassbender.id,
            movieCrewMemberTypeId: actor!.id,
          },
          {
            movieCrewMemberId: tilda_swinton.id,
            movieCrewMemberTypeId: actor!.id,
          },
        ],
      },
      spokenLanguages: {
        connect: [
          { language: "English" },
          { language: "Spanish" },
          { language: "French" },
        ],
      },
      studios: {
        connect: [{ name: "Netflix" }],
      },
      genres: {
        connect: [{ name: "Action" }, { name: "Thriller" }, { name: "Crime" }],
      },
      keywordCategories: {
        create: [
          { name: "assassin" },
          { name: "hitman" },
          { name: "revenge" },
          { name: "betrayal" },
          { name: "conspiracy" },
        ],
      },
    },
  });

  // Pulp fiction 1994
  const quentin_tarantino = await prisma.movieCrewMember.create({
    data: {
      name: "Quentin Tarantino",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
      description: `Quentin Jerome Tarantino is an American film director, screenwriter, producer, and actor. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, ensemble casts, references to popular culture, alternate history, and neo-noir.`,
      imdbId: "nm0000233",
    },
  });
  const john_travolta = await prisma.movieCrewMember.create({
    data: {
      name: "John Travolta",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/zkAX8YV692YVDQgRBh5JPUddPMQ.jpg",
      description: `John Joseph Travolta is an American actor and singer. He came to public attention during the 1970s, appearing on the television sitcom Welcome Back, Kotter (1975–1979) and starring in the box office successes Carrie (1976), Saturday Night Fever (1977), Grease (1978), and Urban Cowboy (1980).`,
      imdbId: "nm0000237",
    },
  });
  const bruce_willis = await prisma.movieCrewMember.create({
    data: {
      name: "Bruce Willis",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/A1XBu3CffBpSK8HEIJM8q7Mn4lz.jpg",
      description:
        "Walter Bruce Willis is an American actor and film producer. Born in Germany to a German mother and American father, he moved to the United States with his family in 1957.",
      imdbId: "nm0000246",
    },
  });
  const harvey_keitel = await prisma.movieCrewMember.create({
    data: {
      name: "Harvey Keitel",
      photoUrl:
        "https://image.tmdb.org/t/p/w342/7P30hza1neYWW3r7rSQOC736K2Z.jpg",
      description: `Harvey Keitel is an American actor and producer. An Oscar and Golden Globe Award nominee, he has appeared in films such as Martin Scorsese's Mean Streets (1973) and Taxi Driver (1976), Ridley Scott's The Duellists (1977) and Thelma & Louise (1991), Quentin Tarantino's Reservoir Dogs (1992) and Pulp Fiction (1994), Jane Campion's The Piano (1993), Abel Ferrara's Bad Lieutenant (1992), Robert Rodriguez's From Dusk till Dawn (1996), James Mangold's Cop Land (1997), Paolo Sorrentino's Youth (2015).`,
      imdbId: "nm0000172",
    },
  });

  const pulp_fiction = await prisma.movie.create({
    data: {
      movieInfo: {
        create: {
          imdbId: "tt0110912",
          title: "Pulp Fiction",
          description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster’s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
          durationInMinutes: 154,
          releaseDate: new Date("1994-10-14"),
          alternativeTitles: ["Pulp Fiction 1994"],
          posterUrl:
            "https://a.ltrbxd.com/resized/film-poster/5/1/4/4/4/51444-pulp-fiction-0-230-0-345-crop.jpg?v=dee19a8077",
        },
      },
      crewMembers: {
        create: [
          {
            movieCrewMemberId: quentin_tarantino.id,
            movieCrewMemberTypeId: director!.id,
          },
          {
            movieCrewMemberId: john_travolta.id,
            movieCrewMemberTypeId: actor!.id,
          },
          {
            movieCrewMemberId: bruce_willis.id,
            movieCrewMemberTypeId: actor!.id,
          },
          {
            movieCrewMemberId: harvey_keitel.id,
            movieCrewMemberTypeId: actor!.id,
          },
        ],
      },
      spokenLanguages: {
        connect: [
          { language: "English" },
          { language: "Spanish" },
          { language: "French" },
        ],
      },
      studios: {
        connect: [{ name: "Miramax Films" }],
      },
      genres: {
        connect: [
          { name: "Crime" },
          { name: "Drama" },
          { name: "Thriller" },
          { name: "Music" },
        ],
      },
      keywordCategories: {
        create: [
          { name: "violence" },
          { name: "redemption" },
          { name: "gangster" },
          { name: "mob" },
        ],
      },
    },
  });
}

main()
  .then(() => console.log("Seed was successful"))
  .catch((e) => console.error(e));
