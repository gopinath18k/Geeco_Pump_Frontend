import React, { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';
import pumpFallbackImg from '../../assets/res.webp';
import { pumpSelectionQuestions } from '../data/questions';
import { pumps as allPumps } from '../data/products';
import { filterPumps } from './filterLogic';

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a3 3 0 0 1 3 3v2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v2a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-2H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1V10a3 3 0 0 1 3-3h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zm-2 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 4c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"/>
  </svg>
);

const MascotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: '32px', height: '32px' }}>
    <defs>
      <linearGradient id="mascotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8106ee" />
        <stop offset="100%" stopColor="#b41df2" />
      </linearGradient>
    </defs>
    <g fill="url(#mascotGrad)">
      <path d="M 4 23.5 A 3.5 3.5 0 0 0 7.5 27 H 18.5 A 3.5 3.5 0 0 0 22 23.5 V 17 A 9 9 0 0 0 4 17 Z" />
      <circle cx="18.5" cy="5.5" r="4" />
      <circle cx="27.5" cy="11.5" r="4.2" />
      <circle cx="26.5" cy="21" r="3.8" />
    </g>
    <g fill="#ffffff">
      <rect x="8.5" y="15" width="2.5" height="4" rx="1.25" />
      <rect x="15" y="15" width="2.5" height="4" rx="1.25" />
      <rect x="9" y="21.5" width="8" height="2.5" rx="1.25" />
    </g>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3b6df2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
    <polyline points="24 6 13 17 8 12" opacity="0.6"></polyline> 
  </svg>
);

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"></polyline>
    <polyline points="1 20 1 14 7 14"></polyline>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
  </svg>
);

const getFilteredValueGeneric = (pumpValue, finalAnswers) => {
  if (pumpValue === null || pumpValue === undefined) return null;
  if (Array.isArray(pumpValue)) {
    if (finalAnswers) {
      const selectedVals = Object.values(finalAnswers).map(v => 
        String(v).toLowerCase().replace(/ /g, "_")
      );
      const matched = pumpValue.filter(val => 
        selectedVals.includes(String(val).toLowerCase().replace(/ /g, "_"))
      );
      if (matched.length > 0) return matched.join(", ");
    }
    return pumpValue.join(", ");
  }
  return String(pumpValue);
};

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionsFlow, setCurrentQuestionsFlow] = useState([pumpSelectionQuestions[0]]);
  const [isFinished, setIsFinished] = useState(false);
  const [filteredPumps, setFilteredPumps] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const firstQ = pumpSelectionQuestions[0];
    setMessages([{ 
      sender: 'bot', 
      text: 'Hi! I am the Geeco AI Assistant. ' + firstQ.question,
      options: firstQ.options,
      questionId: firstQ.id
    }]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (questionId, option) => {
    setMessages(prev => [...prev, { sender: 'user', text: option.label }]);
    
    const newAnswers = { ...answers, [questionId]: option.id || option.label };
    setAnswers(newAnswers);

    const currentIndex = currentQuestionsFlow.findIndex((q) => q.id === questionId);

    if (option.nextSection) {
      const nextQuestions = pumpSelectionQuestions.filter(q => q.section === option.nextSection);
      const updatedFlow = [...currentQuestionsFlow.slice(0, currentIndex + 1), ...nextQuestions];
      setCurrentQuestionsFlow(updatedFlow);
      
      const nextQ = updatedFlow[currentIndex + 1];
      if (nextQ) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            sender: 'bot',
            text: nextQ.question,
            options: nextQ.options,
            questionId: nextQ.id,
            isInput: nextQ.type === 'input',
            inputUnit: nextQ.unit
          }]);
        }, 500);
      }
    } else {
      const nextUnansweredIndex = currentQuestionsFlow.findIndex(q => newAnswers[q.id] === undefined || newAnswers[q.id] === "");
      if (nextUnansweredIndex !== -1) {
        const nextQ = currentQuestionsFlow[nextUnansweredIndex];
        setTimeout(() => {
          setMessages(prev => [...prev, {
            sender: 'bot',
            text: nextQ.question,
            options: nextQ.options,
            questionId: nextQ.id,
            isInput: nextQ.type === 'input',
            inputUnit: nextQ.unit
          }]);
        }, 500);
      } else {
        handleComplete(newAnswers);
      }
    }
  };

  const handleInputSubmit = (questionId, value) => {
     if (!value.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: value }]);
    
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const nextUnansweredIndex = currentQuestionsFlow.findIndex(q => newAnswers[q.id] === undefined || newAnswers[q.id] === "");
    if (nextUnansweredIndex !== -1) {
      const nextQ = currentQuestionsFlow[nextUnansweredIndex];
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: nextQ.question,
          options: nextQ.options,
          questionId: nextQ.id,
          isInput: nextQ.type === 'input',
          inputUnit: nextQ.unit
        }]);
      }, 500);
    } else {
      handleComplete(newAnswers);
    }
  }

  const handleComplete = (finalAnswers) => {
    setIsFinished(true);
    let results = [];
    try {
      results = filterPumps(finalAnswers, allPumps);
    } catch (e) {
      console.error(e);
      results = [];
    }
    
    setFilteredPumps(results);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'bot',
        text: `I've found ${results.length} pump(s) matching your needs.`,
        isResult: true,
        results: results,
        finalAnswers: finalAnswers
      }]);
    }, 800);
  };

  const resetChat = () => {
    setIsFinished(false);
    setAnswers({});
    const firstQ = pumpSelectionQuestions[0];
    setCurrentQuestionsFlow([firstQ]);
    setMessages([{ 
      sender: 'bot', 
      text: 'Hi! Let\'s start over. ' + firstQ.question,
      options: firstQ.options,
      questionId: firstQ.id
    }]);
    setFilteredPumps([]);
  };

  const renderMessage = (msg, i) => {
    if (msg.sender === 'user') {
      return (
        <div key={i} className="chat-message-row user-row">
          <div className="chat-message-content" style={{ alignItems: 'flex-end' }}>
            <div className="chat-bubble user">
              {msg.text}
            </div>
            <div className="chat-time-row user-time">
              <span>{msg.time || getCurrentTime()}</span>
              <CheckIcon />
            </div>
          </div>
          <div className="chat-avatar user-icon-wrapper" style={{ backgroundColor: 'transparent' }}>
            <MascotIcon />
          </div>
        </div>
      );
    }
    
    const isLastMessage = i === messages.length - 1;
    return (
      <div key={i} className="chat-message-row bot-row">
        <div className="chat-avatar bot">
          <BotIcon />
        </div>
        <div className="chat-message-content">
          <div className="chat-time-row bot-time">
            <span>{msg.time || getCurrentTime()}</span>
          </div>
          <div className="chat-bubble bot">
            {msg.text}
            
            {msg.isResult && (
               <div className="chat-results-container">
                 {!msg.showDetailed ? (
                   <button 
                     className="view-all-pumps-btn"
                     onClick={() => {
                        const newMessages = [...messages];
                        newMessages[i].showDetailed = true;
                        setMessages(newMessages);
                     }}>
                     View All Pumps
                   </button>
                 ) : (
                   <div className="detailed-pumps-slider">
                     {msg.results.map((pump, idx) => (
                        <div key={idx} className="detailed-pump-card">
                          <div className="pump-image-wrapper">
                            {/* Use actual imageUrl from data, and fallback if missing */}
                            <img src={pump.imageUrl || pump.image || pumpFallbackImg} alt={pump.name || pump.modelName || "Pump"} />
                          </div>
                          <h4 className="pump-title-lbl">{pump.name || pump.id || pump.pumpseries || "Pump"}</h4>
                          
                          <div className="pump-specs">
                            {pump.application && (
                              <div className="spec-row"><span className="spec-label">Application:</span> <span className="spec-val">{getFilteredValueGeneric(pump.application, msg.finalAnswers)}</span></div>
                            )}
                            {pump.mainPurpose && (
                              <div className="spec-row"><span className="spec-label">Main Purpose:</span> <span className="spec-val">{getFilteredValueGeneric(pump.mainPurpose, msg.finalAnswers)}</span></div>
                            )}
                            {pump.waterSource && (
                              <div className="spec-row"><span className="spec-label">Water Source:</span> <span className="spec-val">{getFilteredValueGeneric(pump.waterSource, msg.finalAnswers)}</span></div>
                            )}
                            {pump.installLocation && (
                              <div className="spec-row"><span className="spec-label">Install Location:</span> <span className="spec-val">{getFilteredValueGeneric(pump.installLocation, msg.finalAnswers)}</span></div>
                            )}
                            {pump.installLocationType && (
                              <div className="spec-row"><span className="spec-label">Install Location Type:</span> <span className="spec-val">{getFilteredValueGeneric(pump.installLocationType, msg.finalAnswers)}</span></div>
                            )}
                            {pump.headMin != null && pump.headMax != null && (
                              <div className="spec-row"><span className="spec-label">Head:</span> <span className="spec-val">{pump.headMin}-{pump.headMax} M</span></div>
                            )}
                            {pump.lpmMin != null && pump.lpmMax != null && (
                              <div className="spec-row"><span className="spec-label">LPM:</span> <span className="spec-val">{pump.lpmMin}-{pump.lpmMax} L/Min</span></div>
                            )}
                            {pump.numberofSB && (
                              <div className="spec-row"><span className="spec-label">No bathrooms:</span> <span className="spec-val">{getFilteredValueGeneric(pump.numberofSB, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {pump.numberofSBS && (
                              <div className="spec-row"><span className="spec-label">Outlets Used Simultaneously:</span> <span className="spec-val">{getFilteredValueGeneric(pump.numberofSBS, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {pump.pumpHp && (
                              <div className="spec-row"><span className="spec-label">Pump HP:</span> <span className="spec-val">{getFilteredValueGeneric(pump.pumpHp, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {pump.pumpTankCapacity && (
                              <div className="spec-row"><span className="spec-label">Pump Tank Capacity:</span> <span className="spec-val">{getFilteredValueGeneric(pump.pumpTankCapacity, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {pump.phase && (
                              <div className="spec-row"><span className="spec-label">Phase:</span> <span className="spec-val">{getFilteredValueGeneric(pump.phase, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {pump.sandorsilt && (
                              <div className="spec-row"><span className="spec-label">Sand or Silt:</span> <span className="spec-val">{getFilteredValueGeneric(pump.sandorsilt, msg.finalAnswers)?.replace(/_/g, ' ')}</span></div>
                            )}
                            {(pump.deliverySize || pump.borewellSize) && (
                              <div className="spec-row"><span className="spec-label">{pump.deliverySize ? 'Delivery Size' : 'Borewell Size'}:</span> <span className="spec-val">{getFilteredValueGeneric(pump.deliverySize || pump.borewellSize, msg.finalAnswers)}</span></div>
                            )}
                          </div>
                          
                          <button className="view-details-solid-btn" onClick={() => window.location.href='/pump-selection-tool'}>View Details</button>
                        </div>
                     ))}
                   </div>
                 )}
               </div>
            )}
          </div>
          
          {isLastMessage && msg.options && (
            <div className="chat-options">
              {msg.options.map((opt, idx) => (
                <button key={idx} className="chat-option-btn" onClick={() => handleOptionClick(msg.questionId, opt)}>
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="chatbot-widget-container">
      {!isOpen ? (
        <button className="chatbot-bubble-btn" onClick={() => setIsOpen(true)}>
          <div style={{ width: 28, height: 28 }}><BotIcon /></div>
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="header-avatar">
                 <BotIcon />
              </div>
              <div className="header-info">
                <h3>Geeco AI Assistant</h3>
                <span className="status-online"><span className="status-dot"></span> Online</span>
              </div>
            </div>
            <div className="chatbot-header-right">
              <button className="chatbot-reset-btn" onClick={resetChat} title="Reset Chat">
                <RefreshIcon />
              </button>
              <button className="chatbot-minimize-btn" onClick={() => setIsOpen(false)} title="Minimize">
                <MinusIcon />
              </button>
            </div>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => renderMessage(msg, i))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input-area">
             <InputSubmitter 
                onSubmit={(val) => {
                    const lastMsg = messages[messages.length - 1];
                    if (lastMsg && lastMsg.isInput) {
                        handleInputSubmit(lastMsg.questionId, val);
                    }
                }} 
                placeholder="Type your message here..." 
             />
          </div>
        </div>
      )}
    </div>
  );
};

const InputSubmitter = ({ onSubmit, placeholder }) => {
  const [val, setVal] = useState('');
  return (
    <div className="chat-input-wrapper">
      <input 
        type="text" 
        value={val} 
        onChange={e => setVal(e.target.value)} 
        placeholder={placeholder} 
        onKeyDown={(e) => { 
            if (e.key === 'Enter') {
                onSubmit(val);
                setVal('');
            }
        }} 
      />
      <button 
        className="chat-send-btn"
        onClick={() => {
            onSubmit(val);
            setVal('');
        }}>
        <SendIcon />
      </button>
    </div>
  );
};

export default ChatbotWidget;
