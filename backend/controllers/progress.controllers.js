const Progress = require('../models/progress.models');
const { errorHandler } = require('../utils/errorHandler');

const validDomains = ['webdev', 'aiml', 'cybersec', 'design', 'appdev', 'dsa'];

exports.updateTaskProgress = async (req, res) => {
  try {
    const { userId, domain, weekNumber, taskIndex, isCompleted } = req.body;

    // Validate inputs
    if (!userId || !domain || !weekNumber || taskIndex === undefined || isCompleted === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!validDomains.includes(domain.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid domain' });
    }

    if (!Number.isInteger(weekNumber) || weekNumber < 1) {
      return res.status(400).json({ message: 'Invalid week number' });
    }

    if (!Number.isInteger(taskIndex) || taskIndex < 0) {
      return res.status(400).json({ message: 'Invalid task index' });
    }

    // Find or create progress document
    let progress = await Progress.findOne({ user: userId, domain: domain.toLowerCase() });

    if (!progress) {
      if (isCompleted) {
        progress = new Progress({
          user: userId,
          domain: domain.toLowerCase(),
          weeks: [{
            weekNumber,
            tasksCompleted: [taskIndex],
            quizPassed: false,
            quizScore: 0,
            completedAt: new Date()
          }]
        });
      } else {
        return res.json({ user: userId, domain: domain.toLowerCase(), weeks: [] });
      }
    } else {
      const weekIndex = progress.weeks.findIndex(w => w.weekNumber === weekNumber);

      if (weekIndex === -1) {
        if (isCompleted) {
          progress.weeks.push({
            weekNumber,
            tasksCompleted: [taskIndex],
            quizPassed: false,
            quizScore: 0,
            completedAt: new Date()
          });
        }
      } else {
        const week = progress.weeks[weekIndex];
        if (isCompleted) {
          if (!week.tasksCompleted.includes(taskIndex)) {
            week.tasksCompleted.push(taskIndex);
            week.completedAt = new Date();
          }
        } else {
          week.tasksCompleted = week.tasksCompleted.filter(index => index !== taskIndex);
          if (week.tasksCompleted.length === 0 && !week.quizPassed) {
            progress.weeks = progress.weeks.filter(w => w.weekNumber !== weekNumber);
          }
        }
      }
    }

    await progress.save();
    res.json(progress);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateQuizProgress = async (req, res) => {
  try {
    const { userId, domain, weekNumber, quizPassed, quizScore } = req.body;

    if (!userId || !domain || !weekNumber || quizPassed === undefined || quizScore === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!validDomains.includes(domain.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid domain' });
    }

    if (!Number.isInteger(weekNumber) || weekNumber < 1) {
      return res.status(400).json({ message: 'Invalid week number' });
    }

    let progress = await Progress.findOne({ user: userId, domain: domain.toLowerCase() });

    if (!progress) {
      progress = new Progress({
        user: userId,
        domain: domain.toLowerCase(),
        weeks: [{
          weekNumber,
          tasksCompleted: [],
          quizPassed,
          quizScore,
          completedAt: new Date()
        }]
      });
    } else {
      const weekIndex = progress.weeks.findIndex(w => w.weekNumber === weekNumber);

      if (weekIndex === -1) {
        progress.weeks.push({
          weekNumber,
          tasksCompleted: [],
          quizPassed,
          quizScore,
          completedAt: new Date()
        });
      } else {
        progress.weeks[weekIndex].quizPassed = quizPassed;
        progress.weeks[weekIndex].quizScore = quizScore;
        progress.weeks[weekIndex].completedAt = new Date();
      }
    }

    await progress.save();
    res.json(progress);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getProgress = async (req, res) => {
  try {
    const { userId, domain } = req.params;

    if (!userId || !domain) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    if (!validDomains.includes(domain.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid domain' });
    }

    const progress = await Progress.findOne({ 
      user: userId, 
      domain: domain.toLowerCase() 
    });

    if (!progress) {
      return res.json({ 
        user: userId, 
        domain: domain.toLowerCase(), 
        weeks: [] 
      });
    }

    res.json(progress);
  } catch (error) {
    errorHandler(error, res);
  }
};