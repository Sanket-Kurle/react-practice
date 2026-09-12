import { ProjectsSidebar } from "./components/ProjectsSidebar.jsx";
import { NewProject } from "./components/NewProject.jsx";
import { NoProjectSelected } from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import { SelectedProject } from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = { text:text, projectId: prevState.selectedProjectId, id:taskId};
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter(
        (task) => task.id !== id,
      ),
    }));
  }

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }
  function handleDeleteButton() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId,
      ),
    }));
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleCancleAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }
  function handleSelectedProject(projectId) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteButton}
      tasks={projectState.tasks}
      project={projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId,
      )}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancleAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
