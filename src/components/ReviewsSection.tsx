import React, { useState } from 'react';
import { REVIEWS, GYM_DETAILS } from '../data/gymData';
import { Review } from '../types';
import { Star, MessageSquare, Plus, ThumbsUp, CheckCircle, Sparkles, X } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !reviewText) return;

    const newReview: Review = {
      id: `r-${Date.now()}`,
      authorName,
      rating,
      relativeTime: 'Just now',
      text: reviewText,
      verifiedMember: true,
      avatarBg: 'bg-lime-400 text-zinc-950 font-black'
    };

    setReviewsList([newReview, ...reviewsList]);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setWriteModalOpen(false);
      setAuthorName('');
      setReviewText('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-zinc-950 border-b border-zinc-800/80 text-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-400/10 border border-lime-400/20 text-xs font-black text-lime-400 uppercase tracking-widest inline-block">
            214+ Verified Google Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            4.9 / 5.0 Star Rating across 214+ authentic Google reviews in Nashik Road.
          </p>
        </div>

        {/* Google AI Review Summary Card & Rating Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
          {/* Big Score */}
          <div className="lg:col-span-4 text-center lg:border-r border-zinc-800 lg:pr-8 space-y-2">
            <div className="text-6xl font-black text-white italic tracking-tight">4.9</div>
            <div className="flex justify-center text-lime-400 text-xl font-bold">
              ★★★★★
            </div>
            <p className="text-xs text-zinc-400 font-extrabold uppercase">(214 Google Reviews)</p>

            {/* Star Distribution */}
            <div className="space-y-1.5 pt-4 max-w-xs mx-auto text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 text-right font-black">5</span>
                <div className="flex-1 h-2 bg-zinc-950 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 w-[92%]"></div>
                </div>
                <span className="w-8 text-zinc-400 text-[11px] font-mono">92%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-right font-black">4</span>
                <div className="flex-1 h-2 bg-zinc-950 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 w-[6%]"></div>
                </div>
                <span className="w-8 text-zinc-400 text-[11px] font-mono">6%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-right font-black">3</span>
                <div className="flex-1 h-2 bg-zinc-950 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 w-[1%]"></div>
                </div>
                <span className="w-8 text-zinc-400 text-[11px] font-mono">1%</span>
              </div>
            </div>
          </div>

          {/* AI Summary Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-black text-lime-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-lime-400" />
              <span>Summarized by Google AI</span>
            </div>
            <blockquote className="text-sm sm:text-base text-zinc-200 leading-relaxed italic bg-zinc-950 border-l-4 border-lime-400 p-5 rounded-r-2xl">
              "{GYM_DETAILS.reviewsSummary}"
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                <span className="bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 font-bold uppercase text-[10px]">✨ Spotless Facility</span>
                <span className="bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 font-bold uppercase text-[10px]">💪 Modern Machines</span>
                <span className="bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800 font-bold uppercase text-[10px]">🤝 No-Judgement Vibe</span>
              </div>

              <button
                onClick={() => setWriteModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Member Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Reviews List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 flex flex-col justify-between hover:border-lime-400/40 transition-all shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lime-400 text-zinc-950 font-black flex items-center justify-center text-sm shadow-md">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-white">{rev.authorName}</p>
                      <p className="text-[10px] text-zinc-400">{rev.relativeTime}</p>
                    </div>
                  </div>
                  <div className="text-lime-400 text-xs font-black">
                    {'★'.repeat(rev.rating)}
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 text-lime-400 font-bold uppercase text-[10px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified Visit
                </span>
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        {writeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5">
              <button
                onClick={() => setWriteModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <h3 className="text-xl font-black uppercase italic text-white">Rate & Review S.K.FITNESS Gym</h3>
                <p className="text-xs text-zinc-400">Share your workout experience with Nashik Road fitness community!</p>
              </div>

              {successMsg ? (
                <div className="p-4 rounded-2xl bg-lime-400/20 border border-lime-400/40 text-lime-400 text-xs text-center space-y-1 font-bold">
                  <p className="font-black text-sm uppercase">Thank You!</p>
                  <p>Your review has been added to S.K.FITNESS feedback wall.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-300 mb-1">Star Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-2xl transition-transform hover:scale-110 ${
                            star <= rating ? 'text-lime-400' : 'text-zinc-800'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-zinc-300 mb-1">Your Experience & Feedback</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Mention trainer guidance, cleanliness, equipment variety..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                  >
                    Submit Member Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

