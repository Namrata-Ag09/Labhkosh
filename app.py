from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:#Yd1302304@localhost/labhkosh'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    profession = db.Column(db.String(50), nullable=False)
    experience = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.Text, nullable=False)
    skills = db.Column(db.String(200), nullable=False)

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    budget = db.Column(db.Float, nullable=False)
    deadline = db.Column(db.Date, nullable=False)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/labor-profile', methods=['GET', 'POST'])
def labor_profile():
    if request.method == 'POST':
        new_user = User(
            name=request.form['name'],
            profession=request.form['profession'],
            experience=int(request.form['experience']),
            location=request.form['location'],
            bio=request.form['bio'],
            skills=request.form['skills']
        )
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('labor-profile.html')

@app.route('/job-posting', methods=['GET', 'POST'])
def job_posting():
    if request.method == 'POST':
        new_job = Job(
            title=request.form['title'],
            category=request.form['category'],
            description=request.form['description'],
            location=request.form['location'],
            budget=float(request.form['budget']),
            deadline=datetime.strptime(request.form['deadline'], '%Y-%m-%d').date()
        )
        db.session.add(new_job)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('job-posting.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)