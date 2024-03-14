import "../styles/shows/styles.css";
import Link from "next/link";

export default function Shows() {
  const shows = [
    {
      id: 1,
      date: "1st Jan 2001",
      venue: "Underworld",
      location: "London",
      tickets: "#",
    },
    {
      id: 2,
      date: "2nd Jan 2001",
      venue: "The Key Club",
      location: "Leeds",
      tickets: "#",
    },
    {
      id: 3,
      date: "3rd Jan 2001",
      venue: "Manchester Academy",
      location: "Manchester",
      tickets: "#",
    },
    {
      id: 4,
      date: "4th Jan 2001",
      venue: "The Globe",
      location: "Cardiff",
      tickets: "#",
    },
    {
      id: 5,
      date: "5th Jan 2001",
      venue: "The Fleece",
      location: "Bristol",
      tickets: "#",
    },
    {
      id: 6,
      date: "6th Jan 2001",
      venue: "The Joiners",
      location: "Southampton",
      tickets: "#",
    },
    {
      id: 7,
      date: "7th Jan 2001",
      venue: "The Underworld",
      location: "London",
      tickets: "#",
    },
  ];

  return (
    <div>
      <h1>Live Shows</h1>
      <div className="container">
        {shows.map(({ id, date, venue, location, tickets }) => (
          <div key={id} className="row">
            <p className="row-item">{date}</p>
            <p className="row-item">{venue}</p>
            <p className="row-item">{location}</p>
            <Link className="row-item button" href={tickets}>
              Buy Here
            </Link>
          </div>
        ))}

        {/* <span className="table-data">
          <p className="table-header">Date</p>
          <p className="table-content">1st Jan 2001</p>
        </span>
        <span className="table-data">
          <p className="table-header">Venue</p>
          <p className="table-content">Underworld</p>
        </span>
        <span className="table-data">
          <p className="table-header">Location</p>
          <p className="table-content">London</p>
        </span>
        <span className="table-data">
          <p className="table-header">Tickets</p>
          <Link className="table-content" href="#">
            Buy Here
          </Link>
        </span> */}
      </div>
    </div>
  );
}
