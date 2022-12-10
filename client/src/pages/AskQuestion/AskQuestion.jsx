import React from 'react'
import './AskQuestion.css'


const AskQuestion = () => {


    return (
        <div className='ask-question'>
            <div className='ask-ques-container'>
                <h1>Ask a public Question</h1>
                <form action="">
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p> Be specific and imagine you’re asking a question to another person.</p>
                            <input type="text" name="ask-ques-title" id="ask-ques-title" placeholder='title'/>
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p> Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                            <textarea name="ask-ques-body" id ="ask-ques-body" cols="" rows="10"></textarea>
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Title</h4>
                            <p> Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                            <input type="text" name="ask-ques-tags" id="ask-ques-tags" placeholder='tags'/>
                        </label>
                    </div>
                    <input className='review-btn' type="submit" value="Review your question" />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion