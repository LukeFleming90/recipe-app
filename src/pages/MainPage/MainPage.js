import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';

export default function MainPage({ user, setUser }) {
    return (
        <main>
            <Nav user={user} setUser={setUser}/>
        </main>
    )
}