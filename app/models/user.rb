class User < ApplicationRecord
  validates :password_digest, :fname, :lname, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  after_initialize :ensure_session_token
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password

  has_many :offices,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Office

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return user if user && user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
