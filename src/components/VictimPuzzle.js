// src/components/VictimPuzzle.js
import React, { useState, useEffect } from 'react';
import VictimInfo from './VictimInfo';
import CrimeScene from './CrimeScene'; // Import the CrimeScene component

const VictimPuzzle = ({ onPuzzleComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showVictimInfo, setShowVictimInfo] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch questions from the Open Trivia Database API
        const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        const data = await response.json();

        // Extract relevant data from the API response
        const fetchedQuestions = data.results.map((question, index) => {
          const options = [...question.incorrect_answers, question.correct_answer];
          // Shuffle the options to randomize their order
          const shuffledOptions = options.sort(() => Math.random() - 0.5);

          return {
            id: index + 1,
            text: decodeEntities(question.question),
            correctAnswer: decodeEntities(question.correct_answer),
            options: shuffledOptions.map((option) => decodeEntities(option)),
          };
        });

        // Randomly select two questions
        const selected = [];
        while (selected.length < 2) {
          const randomIndex = Math.floor(Math.random() * fetchedQuestions.length);
          if (!selected.includes(randomIndex)) {
            selected.push(randomIndex);
          }
        }

        setQuestions(fetchedQuestions);
        setSelectedQuestions(selected);
        setLoading(false); // Set loading to false after questions are fetched
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchQuestions();
  }, []);

  const decodeEntities = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleCloseVictimInfo = () => {
    setShowVictimInfo(false);
    setPuzzleCompleted(false);
    setAnswers({});
  };

  const handlePuzzleComplete = (isCorrect) => {
    setPuzzleCompleted(true);

    if (isCorrect && Object.keys(answers).length === selectedQuestions.length) {
      // Check if all questions are answered correctly
      const allCorrect = selectedQuestions.every(
        (index) => answers[index + 1] === questions[index].correctAnswer
      );

      if (allCorrect) {
        setShowVictimInfo(true);
      } else {
        alert('Wrong answers! Please try again.');
      }
    } else {
      alert('Incomplete answers! Please answer all questions.');
    }
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (showVictimInfo) {
    return <VictimInfo onClose={handleCloseVictimInfo} />;
  }

  return (
    <div>
      <h2 style={{ marginTop: '60px' }}>Solve the questions to get victim information</h2>
      {selectedQuestions.map((index) => (
        <div
          key={index}
          style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '30px', backgroundColor: 'black' }}
        >
          <p style={{ backgroundColor: 'black', color: 'white' }} dangerouslySetInnerHTML={{ __html: questions[index].text }} />
          <div style={{ marginTop: '20px', backgroundColor: 'black' }}>
            {questions[index].options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                style={{
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgb(169, 227, 208)',
                }}
              >
                <input
                  type="radio"
                  name={`question_${index}`}
                  id={`option_${optionIndex}`}
                  value={option}
                  checked={answers[index + 1] === option}
                  onChange={() => handleAnswerChange(index + 1, option)}
                />
                <label htmlFor={`option_${optionIndex}`} dangerouslySetInnerHTML={{ __html: option }} style={{ marginLeft: '10px', backgroundColor: 'rgb(169, 227, 208)' }} />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        style={{
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: 'black',
          color:"white"
          
        }}
        onClick={() => handlePuzzleComplete(true)}
      >
        Submit Answers
      </button>
    </div>
  );
};

export default VictimPuzzle;
