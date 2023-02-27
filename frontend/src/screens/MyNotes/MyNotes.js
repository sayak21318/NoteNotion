import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../../components/MainScreen/MainScreen";
import axios from 'axios'
import notes from "../../components/data/notes";

export const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
  };


  const fetchNotes = async () => {
    const data = await axios.get("/api/notes");

    console.log(data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  


  return (
    <MainScreen title="Welcome back Sayak Ghosh...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion defaultActiveKey="0">
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Header>
                  <div>{note.title}</div>
                </Accordion.Header>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge text="light" bg="success">
                    Category - {note.category}
                  </Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">Created on-date</footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};
