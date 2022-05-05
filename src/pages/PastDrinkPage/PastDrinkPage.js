import { useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import React, { useState, useRef } from 'react';


export default function AboutPage({ user, setUser }) {

    return (
        <main>
            <Nav user={user} setUser={setUser}/>
        </main>
    )
}