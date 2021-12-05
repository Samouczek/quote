import {useEffect, useState} from "react";
import {GetQuotes} from "./GetQuotes";


const randomQuote = (array) => {
    return Math.floor(Math.random() * (array.length-1));
}

export default function ShowQuote() {
    const [data, setData] = useState('');
    const [prevQuote, setPrevQuote] = useState('');
    const [quote, setQuote] = useState('');
    const [prevAuthor, setPrevAuthor] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        GetQuotes(setData);
    },[]);

    useEffect(() => {
        if (data) {
            const {quote, author} = data[randomQuote(data)];
            setQuote(quote);
            setAuthor(author)
        }
    },[data]);

    const handleNext = () => {
        setPrevQuote(quote);
        setPrevAuthor(author);
        const random = data[randomQuote(data)];
        setQuote(random.quote);
        setAuthor(random.author)
    }

    const handlePrev = () => {
        if (prevQuote) {
            setQuote(prevQuote);
            setAuthor(prevAuthor)
            setPrevQuote('');
            setPrevAuthor('');
        }
    }

    return (
        <div className={'container'}>
            <p className={'title'}><strong> Cytat:  </strong> </p>
            <p className={'quote'}>"{quote}"</p>
            <p className={'author'}>{author}</p>
            <button className={'btn'} onClick={handlePrev}> Poprzedni cytat</button>
            <button className={'btn'} onClick={handleNext}> Następny cytat</button>
        </div>
    );
}