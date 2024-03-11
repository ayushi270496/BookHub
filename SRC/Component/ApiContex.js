import React, { useState, useEffect, createContext, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const URL = "https://openlibrary.org/search.json?title=";
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lord of the rings");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, title, first_publish_year } = bookSingle;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        first_publish_year:first_publish_year,
                        title:title
                    };
                });
                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your search result");
                } else {
                    setResultTitle("No Books Found");
                }
            } else {
                setBooks([]);
                setResultTitle("No Books Found");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <ApiContext.Provider value={{ loading, books, searchTerm, setSearchTerm, resultTitle, setResultTitle }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContext;

const styles = StyleSheet.create({});
