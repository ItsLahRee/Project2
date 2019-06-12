module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define("students", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    username: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true,
        len: [1]
      }
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    school_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qt_sem: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    program_start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    program_end: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        len: [1]
      }
    },
    ed_level: {
      type: DataTypes.STRING(50)
    },
    cip_code_one: {
      type: DataTypes.DECIMAL(4, 4),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  Students.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Students.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Students;
};
