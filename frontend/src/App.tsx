import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ExpertsPage } from "./pages/ExpertsPage";
import { StubPage } from "./pages/StubPage";

// Route table. Each stub below is a task a teammate can pick up.
// Replace <StubPage .../> with the real page component when it's built.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/experts" element={<ExpertsPage />} />
        <Route
          path="/about"
          element={
            <StubPage
              title="About Me"
              description="Photo, name, team, icebreakers, expertise tags, badges."
            />
          }
        />
        <Route
          path="/acronyms"
          element={
            <StubPage
              title="Acronym Translator"
              description="Search an acronym → get its meaning and description."
            />
          }
        />
        <Route
          path="/qna"
          element={
            <StubPage
              title="Q&A"
              description="Ask questions, get answers (AI draft if none yet)."
            />
          }
        />
        <Route
          path="/prompts"
          element={
            <StubPage
              title="Prompt Library"
              description="Browse prompts by category, click to copy."
            />
          }
        />
        <Route
          path="/badges"
          element={
            <StubPage
              title="Badges"
              description="Achievements and recognition across the hub."
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
