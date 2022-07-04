import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import useUser from "/lib/useUser";

import { useEffect, useState } from 'react';

export default function Home() {
  const { user } = useUser();

  return (
      <Layout>
        <Navbar />
        <div>
          {/* {user && Hi} */}
          {/* {user.success} */}
          {JSON.stringify(user)}
          {/* {console.log('user: ' + user.success)} */}
          Up-tempo main page
        </div>
      </Layout>
  )
}