import { Part } from "./Part";

export const Course = ({ course }) => {
    return (
        <div>
            <h2>{course.name}</h2>

            {course.parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
            <h3>
                total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
            </h3>
        </div>
    );
};
