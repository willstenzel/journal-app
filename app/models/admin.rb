class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable
  
  # field :encrypted_password, :type => String, :default => ""

  def self.from_google(email:, full_name:, uid:, avatar_url:)
    require 'securerandom'
    create_with(uid: uid, full_name: full_name, avatar_url: avatar_url).find_or_create_by!(email: email, password: SecureRandom.urlsafe_base64)
  end
end
