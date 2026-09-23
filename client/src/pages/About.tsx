import './About.css';

export default function About() {
  return (
    <main className="about">
      <div className="about__inner">
        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="about__title">About TaskMate</h1>

          <p className="about__intro">
            TaskMate is a simple task management application designed to help
            students and busy individuals organize their daily tasks.
          </p>

          <div className="about__section">
            <h2 className="about__subheading">What is TaskMate?</h2>
            <p>
              TaskMate is a lightweight to-do app that runs entirely in your
              browser. It saves your tasks automatically so they are still
              there when you come back.
            </p>
          </div>

          <div className="about__section">
            <h2 className="about__subheading">Who is it for?</h2>
            <p>
              TaskMate is built for students and busy people who want a simple,
              distraction-free way to keep track of what they need to do.
            </p>
          </div>

          <div className="about__section">
            <h2 className="about__subheading">What can you do?</h2>
            <ul className="about__list">
              <li>Add new tasks quickly</li>
              <li>Mark tasks as complete or incomplete</li>
              <li>Edit task titles at any time</li>
              <li>Delete tasks you no longer need</li>
              <li>Filter tasks by status: All, Active, or Completed</li>
            </ul>
          </div>

          <div className="about__section">
            <h2 className="about__subheading">Why use TaskMate?</h2>
            <p>
              There are no sign-ups, no subscriptions, and no complicated
              settings. TaskMate focuses on one thing: helping you stay
              organized and get things done.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
