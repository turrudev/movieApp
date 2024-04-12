import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import MovieComponent from './MovieComponent';
import {ThemeProvider} from '../../providers/ThemeProvider';
import getMovieImdbLink from "../../utils/getIMDBMovieLink";

window.open = jest.fn();

describe('MovieComponent', () => {
    const movie = {
        title: 'Inception',
        year: '2010',
        id: 'tt1375666',
        posterURL: 'http://example.com/poster.jpg'
    }, delay = 0;

    it('renders movie information and handles click', () => {
        render(
            <ThemeProvider>
                <MovieComponent movie={movie} delay={delay}/>
            </ThemeProvider>
        );

        expect(screen.getByText(movie.title)).toBeInTheDocument();
        fireEvent.click(screen.getByText(movie.title));
        expect(window.open).toHaveBeenCalledWith(getMovieImdbLink(movie.id), '_blank');
    });

    it('handles key press event', () => {
        render(
            <ThemeProvider>
                <MovieComponent movie={movie} delay={delay}/>
            </ThemeProvider>
        );

        fireEvent.keyDown(screen.getByText('Inception'), {key: 'Enter', code: 'Enter'});
        expect(window.open).toHaveBeenCalledWith(getMovieImdbLink(movie.id), '_blank');
    });
});
