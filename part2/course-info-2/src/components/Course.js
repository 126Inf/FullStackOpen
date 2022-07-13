import React from 'react';
import Part from './Part';

const Course = ({course}) => {
    const sum = course.parts.reduce((acc, cur) => {
            return acc + cur.exercises;
    }, 0);

    return (
        <>
        <header>
            <h1>{course.name}</h1>
        </header>
        <main>
            {course.parts.map((part) => {
                return (
                    <Part key={part.id} part={part} />
                )
            })}
            <p>Total of {sum} exercises</p>
        </main>
        </>
    )
}

export default Course;