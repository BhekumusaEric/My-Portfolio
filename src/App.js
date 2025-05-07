import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import AIChatbot from './components/AIChatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/projects/:slug" component={ProjectDetail} />
              <Route path="/skills" component={Skills} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>
        </main>
        <AIChatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
