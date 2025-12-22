import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Gamepad2, RotateCcw, Trophy, Zap, Brain, Target } from 'lucide-react';

// Memory Match Game
function MemoryGame() {
  const emojis = ['🚀', '💻', '⚡', '🎨', '🔥', '💡', '🎯', '🌟'];
  const [cards, setCards] = useState<{ id: number; emoji: string; flipped: boolean; matched: boolean }[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initGame = useCallback(() => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false }));
    setCards(shuffled);
    setSelected([]);
    setMoves(0);
    setGameWon(false);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first].emoji === cards[second].emoji) {
        setCards(prev => prev.map((card, i) =>
          i === first || i === second ? { ...card, matched: true } : card
        ));
      }
      setTimeout(() => {
        setCards(prev => prev.map((card, i) =>
          selected.includes(i) && !card.matched ? { ...card, flipped: false } : card
        ));
        setSelected([]);
      }, 800);
      setMoves(m => m + 1);
    }
  }, [selected, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  const handleClick = (index: number) => {
    if (selected.length < 2 && !cards[index].flipped && !cards[index].matched) {
      setCards(prev => prev.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      ));
      setSelected(prev => [...prev, index]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-4 sm:p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Memory Match</h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">Moves: {moves}</span>
          <button onClick={initGame} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <RotateCcw className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {cards.map((card, index) => (
          <motion.button
            key={card.id}
            onClick={() => handleClick(index)}
            whileHover={{ scale: card.flipped || card.matched ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-xl text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 ${
              card.flipped || card.matched
                ? 'bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border-cyan-500/50'
                : 'bg-white/5 hover:bg-white/10 border-white/10'
            } border`}
          >
            <AnimatePresence mode="wait">
              {(card.flipped || card.matched) ? (
                <motion.span
                  key="emoji"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.emoji}
                </motion.span>
              ) : (
                <motion.span
                  key="hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-600"
                >
                  ?
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {gameWon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mt-4 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 text-center"
          >
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-white font-bold">You Won! 🎉</p>
            <p className="text-gray-400 text-sm">Completed in {moves} moves</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reaction Time Game
function ReactionGame() {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'go' | 'result' | 'early'>('waiting');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startGame = () => {
    setGameState('ready');
    const delay = Math.random() * 3000 + 2000; // 2-5 seconds
    timeoutRef.current = setTimeout(() => {
      setGameState('go');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (gameState === 'waiting') {
      startGame();
    } else if (gameState === 'ready') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setGameState('early');
    } else if (gameState === 'go') {
      const time = Date.now() - startTime;
      setReactionTime(time);
      if (!bestTime || time < bestTime) setBestTime(time);
      setGameState('result');
    } else {
      setGameState('waiting');
    }
  };

  const getColor = () => {
    switch (gameState) {
      case 'waiting': return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30';
      case 'ready': return 'from-red-500/20 to-orange-500/20 border-red-500/30';
      case 'go': return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
      case 'result': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
      case 'early': return 'from-red-500/20 to-red-600/20 border-red-500/30';
      default: return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
    }
  };

  const getMessage = () => {
    switch (gameState) {
      case 'waiting': return { title: 'Click to Start', subtitle: 'Test your reflexes!' };
      case 'ready': return { title: 'Wait for Green...', subtitle: "Don't click yet!" };
      case 'go': return { title: 'CLICK NOW!', subtitle: '⚡' };
      case 'result': return { title: `${reactionTime}ms`, subtitle: reactionTime < 250 ? 'Amazing! 🔥' : reactionTime < 350 ? 'Great! ⚡' : 'Good! 👍' };
      case 'early': return { title: 'Too Early!', subtitle: 'Click to try again' };
      default: return { title: '', subtitle: '' };
    }
  };

  const msg = getMessage();

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-4 sm:p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-bold text-white">Reaction Time</h3>
        </div>
        {bestTime && (
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <Trophy className="w-4 h-4 text-yellow-400" /> Best: {bestTime}ms
          </span>
        )}
      </div>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br ${getColor()} border-2 flex flex-col items-center justify-center transition-all duration-300`}
      >
        <motion.div
          key={gameState}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className={`text-2xl sm:text-4xl font-bold ${gameState === 'go' ? 'text-green-400' : 'text-white'}`}>
            {msg.title}
          </p>
          <p className="text-gray-400 mt-2">{msg.subtitle}</p>
        </motion.div>
      </motion.button>
    </div>
  );
}

// Click Speed Game
function ClickSpeedGame() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setScore(clicks);
      if (clicks > highScore) setHighScore(clicks);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, clicks, highScore]);

  const startGame = () => {
    setClicks(0);
    setTimeLeft(10);
    setIsPlaying(true);
    setScore(null);
  };

  const handleClick = () => {
    if (isPlaying) {
      setClicks(c => c + 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-4 sm:p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-red-400" />
          <h3 className="text-lg font-bold text-white">Click Speed</h3>
        </div>
        {highScore > 0 && (
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <Trophy className="w-4 h-4 text-yellow-400" /> Best: {highScore}
          </span>
        )}
      </div>

      {!isPlaying && score === null ? (
        <motion.button
          onClick={startGame}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/30 flex flex-col items-center justify-center"
        >
          <Target className="w-12 h-12 text-red-400 mb-2" />
          <p className="text-xl font-bold text-white">Click to Start</p>
          <p className="text-gray-400 text-sm">10 seconds challenge</p>
        </motion.button>
      ) : isPlaying ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold text-white">{clicks}</span>
            <span className="text-2xl font-mono text-red-400">{timeLeft}s</span>
          </div>
          <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
            className="w-full h-40 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/30"
          >
            <motion.span
              key={clicks}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              TAP!
            </motion.span>
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-48 sm:h-56 flex flex-col items-center justify-center"
        >
          <Trophy className="w-12 h-12 text-yellow-400 mb-2" />
          <p className="text-4xl font-bold text-white">{score} clicks</p>
          <p className="text-gray-400 mb-4">{(score! / 10).toFixed(1)} clicks/second</p>
          <button
            onClick={startGame}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg transition-shadow"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default function Games() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="games" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f172a]/50 to-[#0a0a0f]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 font-medium mb-4 block">TAKE A BREAK</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Mini <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 flex items-center justify-center gap-2">
            <Gamepad2 className="w-5 h-5" />
            Have some fun while you're here!
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MemoryGame />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ReactionGame />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <ClickSpeedGame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
